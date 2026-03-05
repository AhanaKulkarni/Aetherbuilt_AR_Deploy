import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  contactPersonName: text("contact_person_name").notNull(),
  designation: text("designation").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  manufacturingCategory: text("manufacturing_category").notNull(),
  typeOfProducts: text("type_of_products").notNull(),
  location: text("location").notNull(),
  website: text("website"),
  estimatedMachines: text("estimated_machines").notNull(),
  purposeOfContact: text("purpose_of_contact").notNull(),
  message: text("message").notNull(),
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
