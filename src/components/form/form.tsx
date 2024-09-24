import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from "@rneui/themed";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import { Control, Controller, RegisterOptions } from "react-hook-form";

import { styles } from "./form.styles";

import { DEFAULT_PHONE_NUMBER_COUNTRY_CODE } from "@/config/constants";

interface InputVariant {
  [key: string]: {
    [key in keyof BaseInputProps]: BaseInputProps[key];
  };
}

const variants: InputVariant = {
  text: {
    placeholder: "Escribe aquí",
    maxLength: 100,
  },
  phone: {
    keyboardType: "number-pad",
    maxLength: 11,
    placeholder: "123 4567890",
  },
  code: {
    autoComplete: "sms-otp",
    keyboardType: "number-pad",
    maxLength: 4,
    placeholder: "1234",
    textContentType: "oneTimeCode",
  },
};
export interface InputProps {
  control: Control<any, any>;
  disabled?: boolean;
  error?: string;
  keyboardType?: BaseInputProps["keyboardType"];
  label: string;
  name: string;
  rules?: RegisterOptions;
  testID?: string;
  variant?: keyof typeof variants;
}

export const Input = ({
  control,
  disabled,
  error,
  name,
  label,
  variant = "text",
  testID,
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
            containerStyle={styles.container}
            disabled={disabled}
            errorMessage={error}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
            label={label}
            labelStyle={[
              styles.labelStyle,
              disabled && styles.disabledLabelStyle,
            ]}
            onBlur={onBlur}
            onChangeText={handleOnChange}
            ref={ref}
            testID={testID}
            value={value}
          />
        );
      }}
      rules={{
        ...rules,
        validate: (value) => {
          switch (variant) {
            case "phone":
              return (
                isValidPhoneNumber(value, DEFAULT_PHONE_NUMBER_COUNTRY_CODE) ||
                "Número de teléfono inválido"
              );
            case "code":
              return value.length === 4 || "Código inválido";
            default:
              return true;
          }
        },
      }}
    />
  );
};
