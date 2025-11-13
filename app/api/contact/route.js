import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    // Save contact data in Supabase only
    const { data, error } = await supabase
      .from("Contact")
      .insert([{ name, phone, email, message }]);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact Form Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
