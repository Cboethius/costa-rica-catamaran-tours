import { NextResponse } from "next/server";
import { createInquiry } from "@/lib/inquiries-store";
import { getTourById } from "@/lib/tours-store";

type Body = {
  tourId: string;
  preferredDate: string;
  passengers: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    if (
      !body.tourId ||
      !body.preferredDate ||
      !body.passengers ||
      !body.name?.trim() ||
      !body.email?.trim() ||
      !body.phone?.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (body.passengers < 1 || body.passengers > 50) {
      return NextResponse.json(
        { error: "Passengers must be between 1 and 50." },
        { status: 400 },
      );
    }

    const tour = await getTourById(body.tourId);
    if (!tour || !tour.active) {
      return NextResponse.json({ error: "Invalid tour selected." }, { status: 400 });
    }

    const inquiry = await createInquiry({
      tourId: tour.id,
      tourName: tour.name,
      preferredDate: body.preferredDate,
      passengers: body.passengers,
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      message: body.message?.trim(),
    });

    return NextResponse.json({ id: inquiry.id });
  } catch (error) {
    console.error("[inquiries]", error);
    return NextResponse.json(
      { error: "Unable to save inquiry. Please try again." },
      { status: 500 },
    );
  }
}
