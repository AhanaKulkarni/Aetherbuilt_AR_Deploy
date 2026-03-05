import { db } from "./db";
import {
  contactSubmissions,
  type CreateContactRequest,
  type ContactResponse
} from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: CreateContactRequest): Promise<ContactResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: CreateContactRequest): Promise<ContactResponse> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }
}

export const storage = new DatabaseStorage();
