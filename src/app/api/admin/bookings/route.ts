import { NextRequest, NextResponse } from "next/server";
import { getBookings, getContactMessages, updateBookingStatus } from "@/lib/db/storage";

export async function GET(req: NextRequest) {
  try {
    const bookings = await getBookings();
    const messages = await getContactMessages();

    return NextResponse.json({
      success: true,
      bookings,
      messages,
    });
  } catch (error) {
    console.error("Admin API fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch administrative records." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    if (!id || !["pending", "confirmed", "completed", "cancelled"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid booking ID or status" },
        { status: 400 }
      );
    }

    const updated = await updateBookingStatus(id, status);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Booking record not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      booking: updated,
    });
  } catch (error) {
    console.error("Admin API update error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update booking status." },
      { status: 500 }
    );
  }
}
