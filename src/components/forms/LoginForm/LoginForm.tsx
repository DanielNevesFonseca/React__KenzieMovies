import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { LoginFormSchema, TLoginFormValues } from "./LoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./styles.module.scss";
import { InputPassword } from "../InputPassword/InputPassword";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = async (formData) => {
    console.log(formData);
  };

  return (
    <form className={`${styles.loginForm}`} onSubmit={handleSubmit(submit)}>
      <Input {...register("email")} type="text" error={errors.email} placeholder="Email" autoComplete="off"/>
      <InputPassword {...register("password")} error={errors.password} placeholder="Password" autoComplete="off"/>
      <button type="submit" className="btn-md">Entrar</button>
    </form>
  );
};
