import fs from "fs/promises";
import path from "path";

export interface BookingRecord {
  id: string;
  serviceId: string;
  serviceTitle: string;
  servicePrice: number;
  durationMin: number;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "11:00 AM"
  timeZone: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  consultationType: "virtual" | "in_person";
  birthDate?: string;
  birthTime?: string;
  birthLocation?: string;
  notes?: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

interface DatabaseSchema {
  bookings: BookingRecord[];
  contactMessages: ContactMessage[];
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DB_FILE = path.join(DATA_DIR, "atelier-db.json");

const INITIAL_DB: DatabaseSchema = {
  bookings: [
    {
      id: "CA-948102",
      serviceId: "svc_astrology_natal",
      serviceTitle: "Natal Chart & Soul Blueprint",
      servicePrice: 280,
      durationMin: 75,
      date: "2024-11-20",
      timeSlot: "11:00 AM",
      timeZone: "Asia/Kolkata",
      clientName: "Seraphina Lin",
      clientEmail: "seraphina.lin@example.com",
      clientPhone: "+1 (555) 392-8190",
      consultationType: "virtual",
      birthDate: "1992-06-18",
      birthTime: "04:22 AM",
      birthLocation: "Vienna, Austria",
      notes: "Focusing on my Saturn return and career transition toward creative direction.",
      status: "confirmed",
      createdAt: "2024-10-25T09:15:00.000Z",
      updatedAt: "2024-10-25T10:00:00.000Z",
    },
    {
      id: "CA-381920",
      serviceId: "svc_tarot_reading",
      serviceTitle: "Contemplative Tarot Sanctuary",
      servicePrice: 195,
      durationMin: 60,
      date: "2024-11-22",
      timeSlot: "02:30 PM",
      timeZone: "Asia/Kolkata",
      clientName: "Julian Vance",
      clientEmail: "julian.vance@example.com",
      consultationType: "virtual",
      notes: "Seeking archetypal clarity on a long-term partnership choice.",
      status: "pending",
      createdAt: "2024-10-27T14:40:00.000Z",
      updatedAt: "2024-10-27T14:40:00.000Z",
    },
  ],
  contactMessages: [
    {
      id: "MSG-10293",
      name: "Camille Dubois",
      email: "camille@parisdesign.fr",
      subject: "Private Solstice Gathering Inquiry",
      message:
        "Greetings. I am interested in organizing a bespoke private celestial retreat for a small circle of 8 artists in December. Do you offer custom salon bookings?",
      createdAt: "2024-10-26T16:20:00.000Z",
      read: true,
    },
  ],
};

async function ensureDb(): Promise<DatabaseSchema> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      const data = await fs.readFile(DB_FILE, "utf-8");
      return JSON.parse(data) as DatabaseSchema;
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify(INITIAL_DB, null, 2), "utf-8");
      return INITIAL_DB;
    }
  } catch (error) {
    console.error("Database access error:", error);
    return INITIAL_DB;
  }
}

async function writeDb(data: DatabaseSchema): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tempPath = `${DB_FILE}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(data, null, 2), "utf-8");
  await fs.rename(tempPath, DB_FILE);
}

export async function getBookings(): Promise<BookingRecord[]> {
  const db = await ensureDb();
  return db.bookings.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getBookingById(id: string): Promise<BookingRecord | null> {
  const db = await ensureDb();
  return db.bookings.find((b) => b.id === id) || null;
}

export async function isSlotTaken(date: string, timeSlot: string): Promise<boolean> {
  const db = await ensureDb();
  return db.bookings.some(
    (b) => b.date === date && b.timeSlot === timeSlot && b.status !== "cancelled"
  );
}

export async function createBooking(
  bookingData: Omit<BookingRecord, "id" | "status" | "createdAt" | "updatedAt">
): Promise<{ success: boolean; booking?: BookingRecord; error?: string }> {
  const db = await ensureDb();

  // Double-booking check
  const alreadyBooked = db.bookings.some(
    (b) =>
      b.date === bookingData.date &&
      b.timeSlot === bookingData.timeSlot &&
      b.status !== "cancelled"
  );

  if (alreadyBooked) {
    return {
      success: false,
      error: "This celestial time slot has just been reserved. Please select another slot.",
    };
  }

  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const newBooking: BookingRecord = {
    ...bookingData,
    id: `CA-${randomNum}`,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  db.bookings.push(newBooking);
  await writeDb(db);

  return {
    success: true,
    booking: newBooking,
  };
}

export async function updateBookingStatus(
  id: string,
  status: "pending" | "confirmed" | "completed" | "cancelled"
): Promise<BookingRecord | null> {
  const db = await ensureDb();
  const booking = db.bookings.find((b) => b.id === id);
  if (!booking) return null;

  booking.status = status;
  booking.updatedAt = new Date().toISOString();
  await writeDb(db);
  return booking;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const db = await ensureDb();
  return db.contactMessages.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function createContactMessage(
  data: Omit<ContactMessage, "id" | "createdAt" | "read">
): Promise<ContactMessage> {
  const db = await ensureDb();
  const newMsg: ContactMessage = {
    ...data,
    id: `MSG-${Math.floor(10000 + Math.random() * 90000)}`,
    createdAt: new Date().toISOString(),
    read: false,
  };
  db.contactMessages.push(newMsg);
  await writeDb(db);
  return newMsg;
}
