import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { InputPassword } from "../InputPassword/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterFormValues } from "./RegisterFormSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const RegisterForm = () => {

  const {postUserRegister} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    postUserRegister.mutate(formData);
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
        Register
      </button>
    </form>
  );
};
