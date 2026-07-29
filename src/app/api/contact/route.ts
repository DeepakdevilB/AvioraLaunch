import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email provider or use custom SMTP host/port
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // For Gmail, use an App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Send to the professional email
      replyTo: email,
      subject: `New Lead from Aviora Launch: ${subject || 'General Inquiry'}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${subject || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
