import { FC, ChangeEvent, FocusEvent } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
  name: string;
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  onBlur,
}) => {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}{" "}
      <input
        className={error && styles.inputError}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
      />
      <p className={styles.errorText}>{error}</p>
    </div>
  );
};
