import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getInquiries, updateInquiry } from "@/lib/inquiries-store";
import type { InquiryStatus } from "@/lib/types";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const inquiries = await getInquiries();
  return NextResponse.json(inquiries);
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    id: string;
    status?: InquiryStatus;
    assignedProviderId?: string | null;
  };

  if (!body.id) {
    return NextResponse.json({ error: "Missing inquiry id." }, { status: 400 });
  }

  const updated = await updateInquiry(body.id, {
    ...(body.status !== undefined ? { status: body.status } : {}),
    ...(body.assignedProviderId !== undefined
      ? { assignedProviderId: body.assignedProviderId }
      : {}),
  });

  if (!updated) {
    return NextResponse.json({ error: "Inquiry not found." }, { status: 404 });
  }

  return NextResponse.json(updated);
}
