import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from "@rneui/themed";
import { Control, Controller, RegisterOptions } from "react-hook-form";

const variants = {
  clear: {},
  outline: {},
  solid: {},
};

export interface InputProps extends BaseInputProps {
  control: Control<any, any>;
  error?: string;
  keyboardType?: BaseInputProps["keyboardType"];
  name: string;
  placeholder: string;
  rules?: RegisterOptions;
  variant?: keyof typeof variants;
}

export const Input = ({
  control,
  error,
  name,
  placeholder,
  variant = "solid",
  keyboardType,
  rules,
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <BaseInput
          {...variants[variant]}
          errorMessage={error}
          keyboardType={keyboardType}
          onBlur={onBlur}
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
          ref={ref}
        />
      )}
      rules={rules}
    />
  );
};
