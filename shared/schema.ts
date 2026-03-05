import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  contactPersonName: text("contact_person_name").notNull(),
  companyName: text("company_name").notNull(),
  sector: text("sector").notNull(),
  email: text("email").notNull(),
  purposeOfContact: text("purpose_of_contact").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type CreateContactRequest = InsertContact;
export type ContactResponse = ContactSubmission;
