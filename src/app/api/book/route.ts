import { connectMongo } from "@/lib/mongodb";
import { bookingSchema } from "@/lib/validation";
import { Booking } from "@/models/Booking";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          message: "Validation failed.",
          issues: parsed.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    if (!process.env.MONGODB_URI) {
      return Response.json(
        {
          message: "Booking received. Redirecting to WhatsApp.",
          persisted: false,
          warning: "Database is not configured on this deployment yet."
        },
        { status: 202 }
      );
    }

    try {
      await connectMongo();
      await Booking.create({ ...parsed.data, source: "website" });

      return Response.json(
        { message: "Booking saved and ready for WhatsApp handoff.", persisted: true },
        { status: 201 }
      );
    } catch {
      return Response.json(
        {
          message: "Booking received. Redirecting to WhatsApp.",
          persisted: false,
          warning: "Booking could not be saved to the database right now."
        },
        { status: 202 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: error instanceof Error ? error.message : "Unable to process booking right now."
      },
      { status: 500 }
    );
  }
}
