import { randomUUID } from "crypto";
import { readJsonStore, updateJsonStore } from "./json-store";
import type { Inquiry, InquiryStatus } from "./types";

const FILE = "inquiries.json";

const defaultInquiries: Inquiry[] = [];

export async function getInquiries(): Promise<Inquiry[]> {
  const inquiries = await readJsonStore(FILE, defaultInquiries);
  return inquiries.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export type CreateInquiryInput = {
  tourId: string;
  tourName: string;
  preferredDate: string;
  passengers: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export async function createInquiry(input: CreateInquiryInput): Promise<Inquiry> {
  const inquiry: Inquiry = {
    id: randomUUID(),
    ...input,
    status: "new",
    assignedProviderId: null,
    createdAt: new Date().toISOString(),
  };

  await updateJsonStore(FILE, defaultInquiries, (current) => [...current, inquiry]);
  return inquiry;
}

export async function updateInquiry(
  id: string,
  updates: {
    status?: InquiryStatus;
    assignedProviderId?: string | null;
  },
): Promise<Inquiry | null> {
  let updated: Inquiry | null = null;

  await updateJsonStore(FILE, defaultInquiries, (current) =>
    current.map((inquiry) => {
      if (inquiry.id !== id) return inquiry;
      updated = {
        ...inquiry,
        ...(updates.status !== undefined ? { status: updates.status } : {}),
        ...(updates.assignedProviderId !== undefined
          ? { assignedProviderId: updates.assignedProviderId }
          : {}),
      };
      return updated;
    }),
  );

  return updated;
}

export async function getInquiryById(id: string): Promise<Inquiry | undefined> {
  const inquiries = await readJsonStore(FILE, defaultInquiries);
  return inquiries.find((i) => i.id === id);
}
