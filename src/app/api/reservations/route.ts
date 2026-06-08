import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, requests } = body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const guestCount = parseInt(guests, 10);
    if (isNaN(guestCount) || guestCount < 1 || guestCount > 20) {
      return NextResponse.json({ error: "Guest count must be between 1 and 20." }, { status: 400 });
    }

    const whatsappMessage = encodeURIComponent(
      `Hi Zambean! I'd like to reserve a table:\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guestCount}\nPhone: ${phone}\nSpecial requests: ${requests || "None"}`
    );

    console.log("📅 Reservation:", { name, email, phone, date, time, guests: guestCount, requests });

    return NextResponse.json({
      success: true,
      message: "Reservation received! We'll confirm via WhatsApp shortly.",
      whatsappFallback: `https://wa.me/260968773386?text=${whatsappMessage}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please WhatsApp +260 777 793007." },
      { status: 500 }
    );
  }
}
