import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { InputPassword } from "../InputPassword/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterFormValues } from "./RegisterFormSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import styles from "./styles.module.scss";

export const RegisterForm = () => {
  const { postUserRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    const newFormData = { ...formData };
    delete newFormData.confirm_password;
    postUserRegister.mutate(newFormData);
    reset();
  };

  return (
    <form className={`${styles.registerForm}`} onSubmit={handleSubmit(submit)}>
      <div>
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
      </div>
      <div>
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
      </div>
      <button
        disabled={postUserRegister.isLoading}
        className="btn-md"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
