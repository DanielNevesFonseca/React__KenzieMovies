import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./styles.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

export const Input = forwardRef(
  (
    { error, ...rest }: IInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`${styles.inputBox}`}>
        <input {...rest} ref={ref} className="input" />
        <span>{error?.message}</span>
      </div>
    );
  }
);
