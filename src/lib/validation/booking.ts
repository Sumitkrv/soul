import { z } from "zod";

export const bookingFormSchema = z.object({
  serviceId: z.string().min(1, "Please select an experience"),
  serviceTitle: z.string().min(1, "Service title is required"),
  servicePrice: z.number().positive(),
  durationMin: z.number().positive(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please select a valid date"),
  timeSlot: z.string().min(1, "Please select an available time slot"),
  timeZone: z.string().default("Asia/Kolkata"),
  clientName: z.string().min(2, "Name must be at least 2 characters").max(100),
  clientEmail: z.string().email("Please provide a valid email address"),
  clientPhone: z.string().optional(),
  consultationType: z.enum(["virtual", "in_person"], {
    message: "Please choose consultation format",
  }),
  birthDate: z.string().optional(),
  birthTime: z.string().optional(),
  birthLocation: z.string().optional(),
  notes: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to proceed",
  }),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
