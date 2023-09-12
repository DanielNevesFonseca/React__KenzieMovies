import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().nonempty("Email field is required!").email("Type an email!"),
  password: z.string().nonempty("Password field is required!"),
});

export type TLoginFormValues = z.infer<typeof LoginFormSchema>