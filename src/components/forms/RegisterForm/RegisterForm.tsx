import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { InputPassword } from "../InputPassword/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterFormValues } from "./RegisterFormSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        autoComplete="off"
        error={errors.name}
        type="text"
        placeholder="Name"
        {...register("name")}
      />
      <Input
        autoComplete="off"
        error={errors.email}
        type="text"
        placeholder="E-mail"
        {...register("email")}
      />
      <InputPassword
        autoComplete="off"
        error={errors.password}
        placeholder="Password"
        {...register("password")}
      />
      <InputPassword
        autoComplete="off"
        error={errors.confirm_password}
        placeholder="Confirm Password"
        {...register("confirm_password")}
      />
      <button className="btn-md" type="submit">
        Cadastrar-se
      </button>
    </form>
  );
};
