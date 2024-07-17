import { Input as RNEInput, InputProps as RNEInputProps } from "@rneui/themed";
import { FieldError } from "react-hook-form";

const variants = {
  clear: {},
  outline: {},
  solid: {},
};

export interface InputFieldProps extends RNEInputProps {
  error?: FieldError;
  variant?: keyof typeof variants;
}

export const InputField = ({
  variant = "solid",
  ...props
}: InputFieldProps) => {
  return <RNEInput {...props} {...variants[variant]} />;
};
