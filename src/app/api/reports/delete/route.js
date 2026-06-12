import { supabaseAdmin } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { id, file_path } = await request.json();

    if (!id || !file_path) {
      return NextResponse.json({ error: "id and file_path required" }, { status: 400 });
    }

    // Delete from storage
    const { error: storageError } = await supabaseAdmin.storage
      .from("lab-reports")
      .remove([file_path]);

    if (storageError) {
      return NextResponse.json({ error: storageError.message }, { status: 500 });
    }

    // Delete from DB
    const { error: dbError } = await supabaseAdmin
      .from("lab_reports")
      .delete()
      .eq("id", id);

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}