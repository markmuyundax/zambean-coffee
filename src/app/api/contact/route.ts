import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    console.log("📧 Contact:", { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Message sent! We'll get back to you within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please WhatsApp +260 777 793007." },
      { status: 500 }
    );
  }
}
