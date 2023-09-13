import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().nonempty("Name field required!"),
  email: z
    .string()
    .nonempty("E-mail field required!")
    .email("You must type a valid email!"),
  password: z
    .string()
    .nonempty("Password field required!")
    .min(8, "Your password must have at least 8 characters!")
    .regex(
      new RegExp(/^(?=.*[A-Z]).+$/),
      "Your password must have at least an uppercase letter!"
    )
    .regex(
      new RegExp(/^(?=.*[!@#$%^&*]).+$/),
      "Your password must have at least a special character!"
    )
    .regex(
      new RegExp(/^(?=.*[0-9]).+$/),
      "Your password must have at least a number!"
    ),
    confirm_password: z.string().nonempty("Confirm password field required"),
}).refine(({password, confirm_password}) => confirm_password === password, {
  message: "The password and confirm password are not equal!",
  path: ["confirm_password"]
})

export type TRegisterFormValues = z.infer<typeof RegisterFormSchema>