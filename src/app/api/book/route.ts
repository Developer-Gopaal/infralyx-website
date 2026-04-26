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

    await connectMongo();
    await Booking.create({ ...parsed.data, source: "website" });

    return Response.json({ message: "Booking saved and ready for WhatsApp handoff." }, { status: 201 });
  } catch (error) {
    return Response.json(
      {
        message: error instanceof Error ? error.message : "Unable to process booking right now."
      },
      { status: 500 }
    );
  }
}
