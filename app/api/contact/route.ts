import { NextResponse } from "next/server";
import { mg } from "@/services/mailgun";
import invariant from "tiny-invariant";

export async function POST(request: Request) {
  const data = await request.json();
  invariant(process.env.MAILGUN_DOMAIN, "MAILGUN_DOMAIN is missing");
  invariant(
    process.env.EMAIL_NOTIFICATIONS_RECIPIENT,
    "EMAIL_NOTIFICATIONS_RECIPIENT is missing"
  );
  invariant(
    process.env.EMAIL_NOTIFICATIONS_SENDER,
    "EMAIL_NOTIFICATIONS_SENDER is missing"
  );
  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      to: process.env.EMAIL_NOTIFICATIONS_RECIPIENT,
      from: process.env.EMAIL_NOTIFICATIONS_SENDER,
      subject: "¡CONIMEX nuevo contacto!",
      template: "conimex",
      "h:X-Mailgun-Variables": JSON.stringify(data),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 422 });
  }

}
