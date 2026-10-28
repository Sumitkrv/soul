import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/booking";
import { createContactMessage } from "@/lib/db/storage";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = contactFormSchema.safeParse(body);
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
    const newMsg = await createContactMessage({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been safely received by the Atelier Concierge.",
        messageId: newMsg.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
