import { InputHTMLAttributes, forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import styles from "./styles.module.scss";
import { GoEye, GoEyeClosed } from "react-icons/go";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

export const InputPassword = forwardRef(
  (
    { error, ...rest }: IInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className={`${styles.inputPasswordBox}`}>
        <input type={isVisible ? "text" : "password"} {...rest} ref={ref} className="input" />
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <GoEyeClosed size={24}/> : <GoEye size={24}/>}
        </button>
        <span>{error?.message}</span>
      </div>
    );
  }
);
