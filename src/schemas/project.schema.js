import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(5, "Description is too short"),
  dueDate: z.string().min(1, "Date is required"),
});
