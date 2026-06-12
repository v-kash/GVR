import { supabaseAdmin } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file     = formData.get("file");
    const title    = formData.get("title");
    const category = formData.get("category");

    if (!file || !title) {
      return NextResponse.json({ error: "File and title are required" }, { status: 400 });
    }

    // Sanitise filename
    const timestamp = Date.now();
    const safeName  = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath  = `reports/${timestamp}_${safeName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer      = new Uint8Array(arrayBuffer);

    // Upload to Supabase Storage
    const { error: uploadError } = await supabaseAdmin.storage
      .from("lab-reports")
      .upload(filePath, buffer, {
        contentType: "application/pdf",
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from("lab-reports")
      .getPublicUrl(filePath);

    // Save metadata to DB
    const { data, error: dbError } = await supabaseAdmin
      .from("lab_reports")
      .insert([{ title, category: category || "General", file_url: publicUrl, file_path: filePath }])
      .select()
      .single();

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}