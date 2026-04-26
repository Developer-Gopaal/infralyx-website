import { model, models, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    device: { type: String, required: true, trim: true },
    issue: { type: String, required: true, trim: true },
    service: { type: String, default: "", trim: true },
    address: { type: String, default: "", trim: true },
    preferredTime: { type: String, default: "", trim: true },
    source: { type: String, default: "website" }
  },
  { timestamps: true }
);

export const Booking = models.Booking ?? model("Booking", bookingSchema);
