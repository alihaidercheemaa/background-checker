import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST,
      port: process.env.NEXT_SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.NEXT_SMTP_USERNAME,
        pass: process.env.NEXT_SMTP_PASSWORD,
      },
    } as SMTPTransport.MailOptions);

    const mailOptions_customer = {
      from: `aria.global ${process.env.NEXT_SMTP_USERNAME}`,
      to: data.email,
      subject: `Request Quote Form Submission`,
      text: `Dear ${data.first_name},\n\nThank you for your inquiry! Our team will get in touch with you shortly.`,
    };

    const mailOptions_admin = {
      from: `aria.global ${process.env.NEXT_SMTP_USERNAME}`,
      to: process.env.NEXT_SMTP_USERNAME,
      subject: `New Quote Request Submitted`,
      html: `
          <h2>New Quote Request</h2>
          <p><strong>First Name:</strong> ${data.first_name}</p>
          <p><strong>Last Name:</strong> ${data.last_name}</p>
          <p><strong>Contact Number:</strong> ${data.contact_number}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Loading Place:</strong> ${data.loading_place}</p>
          <p><strong>Unloading Place:</strong> ${data.unloading_place}</p>
          <p><strong>Payload:</strong> ${data.payload}</p>
          <p><strong>Dimensions:</strong> ${data.dimensions}</p>
          <p><strong>Type of Cargo:</strong> ${data.type_of_cargo}</p>
          <p><strong>Type of Transportation:</strong> ${data.type_of_transportation}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `,
    };

    await transporter.sendMail(mailOptions_customer);
    await transporter.sendMail(mailOptions_admin);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error processing email request:", error.message);
      console.error("Error stack trace:", error.stack);
    } else {
      console.error("An unknown error occurred");
    }

    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send email",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
