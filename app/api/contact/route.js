import { connectDB } from "../../../lib/db";
import Contact from "../../../models/Contact";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();
    const { name, email, message } = data;

    // ✅ Save to DB (your existing code)
    const newContact = new Contact(data);
    await newContact.save();

    console.log("Saved:", data);

    // ✅ EMAIL PART (NEW)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting AshokSoft 🚀",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thanks for contacting <b>AshokSoft Technologies</b>.</p>
        <p>We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We will get back to you soon.</p>
        <br/>
        <p>🚀 Team AshokSoft</p>
      `,
    });

    return Response.json({ message: "Saved & Email Sent" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" });
  }
}
