import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";

export async function GET() {
  try {
    const db = await connectToDatabase();
    return NextResponse.json({ message: "✅ MongoDB Connected Successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "❌ Failed to connect to MongoDB" }, { status: 500 });
  }
}
