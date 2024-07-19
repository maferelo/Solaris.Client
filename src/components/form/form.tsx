import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from "@rneui/themed";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import { Control, Controller, RegisterOptions } from "react-hook-form";

import { DEFAULT_PHONE_NUMBER_COUNTRY_CODE } from "@/config/constants";

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
  onChange?: () => void;
  placeholder: string;
  rules?: RegisterOptions;
  variant?: keyof typeof variants;
}

export const Input = ({
  control,
  disabled,
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
      render={({ field: { onChange, onBlur, value, ref } }) => {
        const handleOnChange = (value: string) => {
          const formattedValue = new AsYouType(
            DEFAULT_PHONE_NUMBER_COUNTRY_CODE,
          ).input(value);
          onChange(formattedValue);
        };
        return (
          <BaseInput
            {...variants[variant]}
            disabled={disabled}
            errorMessage={error}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onChangeText={handleOnChange}
            placeholder={placeholder}
            value={value}
            ref={ref}
          />
        );
      }}
      rules={{
        ...rules,
        validate: (value) =>
          isValidPhoneNumber(value, DEFAULT_PHONE_NUMBER_COUNTRY_CODE) ||
          "Número de teléfono inválido",
      }}
    />
  );
};
