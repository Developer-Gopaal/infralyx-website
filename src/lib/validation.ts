import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  device: z.string().min(2, "Please select your device."),
  issue: z.string().min(10, "Please describe the issue in a little more detail."),
  service: z.string().optional().default(""),
  address: z.string().optional().default(""),
  preferredTime: z.string().optional().default("")
});

export type BookingInput = z.infer<typeof bookingSchema>;
