import { connectDB } from "../../../lib/db";
import Contact from "../../../models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    const newContact = new Contact(data);
    await newContact.save();

    console.log("Saved:", data);

    return Response.json({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" });
  }
}
export async function GET() {
  await connectDB();

  const contacts = await Contact.find().sort({ _id: -1 });

  console.log("Fetched:", contacts); // debug

  return Response.json(contacts);
}
