import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  productName: z.string().optional(),
  message: z.string().min(5)
});

export async function POST(req: Request) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());
  const parsed = schema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });

  // Production: connect Resend/CRM here. See README and .env.example.
  console.log("New inquiry:", parsed.data);
  return NextResponse.redirect(new URL("/contact?success=1", req.url), 303);
}
