import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validation/booking";
import { createBooking, isSlotTaken } from "@/lib/db/storage";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = bookingFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          issues: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Check double-booking
    const slotTaken = await isSlotTaken(data.date, data.timeSlot);
    if (slotTaken) {
      return NextResponse.json(
        {
          success: false,
          error: "This time slot is already reserved. Please select another slot.",
        },
        { status: 409 }
      );
    }

    const result = await createBooking({
      serviceId: data.serviceId,
      serviceTitle: data.serviceTitle,
      servicePrice: data.servicePrice,
      durationMin: data.durationMin,
      date: data.date,
      timeSlot: data.timeSlot,
      timeZone: data.timeZone,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      clientPhone: data.clientPhone,
      consultationType: data.consultationType,
      birthDate: data.birthDate,
      birthTime: data.birthTime,
      birthLocation: data.birthLocation,
      notes: data.notes,
    });

    if (!result.success || !result.booking) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to create booking" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        booking: result.booking,
        message: "Your consultation request has been preserved in our sanctuary ledger.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred during reservation." },
      { status: 500 }
    );
  }
}
