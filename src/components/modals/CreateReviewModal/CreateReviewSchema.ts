import { z } from "zod";

export const CreateModalSchema = z.object({
  score: z
    .number()
    .min(0, "Must be equal or greater than 0!")
    .max(10, "Must be equal or less than 10!"),
  description: z
    .string()
    .nonempty("This field is required!")
    .min(20, "Your comment must have at least 20 characters!"),
});

export type ICreateModalValues = z.infer<typeof CreateModalSchema>;
