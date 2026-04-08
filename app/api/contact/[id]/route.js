import { connectDB } from "../../../../lib/db";
import Contact from "../../../../models/Contact";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const params = await context.params; // ✅ FIX HERE
    const id = params.id;

    console.log("👉 DELETE API CALLED");
    console.log("👉 ID:", id);

    const result = await Contact.findByIdAndDelete(id);

    console.log("👉 Deleted Result:", result);

    return Response.json({ message: "Deleted successfully" });
  } catch (error) {
    console.log("❌ ERROR:", error);
    return Response.json({ error: "Delete failed" });
  }
}
