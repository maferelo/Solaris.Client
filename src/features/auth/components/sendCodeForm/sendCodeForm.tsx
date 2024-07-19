import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";

import { useSendCode } from "../../api/sendCode";

import { Button, ButtonProps } from "@/components/button/button";
import { Input } from "@/components/form/form";

export type SendCodeFormProps = {
  onSuccess: () => void;
};

export type SendCodeData = {
  phone: string;
};

export const SendCodeForm = ({ onSuccess }: SendCodeFormProps) => {
  const [buttonState, setButtonState] =
    useState<ButtonProps["state"]>("active");
  const { submit, isPending } = useSendCode({ onSuccess });
  const { control, handleSubmit, formState } = useForm<SendCodeData>();

  const handleOnPress = () => {
    handleSubmit((data) => {
      console.log(data);
      submit({ phone: "+573001234567" });
      setButtonState("disabled");
    })();
  };

  useEffect(() => {
    if (buttonState === "disabled") {
      const timerId = setTimeout(() => {
        setButtonState("active");
      }, 4000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [buttonState]);

  return (
    <View style={styles.container}>
      <Input
        control={control}
        error={formState?.errors.phone?.message}
        placeholder="Celular"
        name="phone"
        keyboardType="phone-pad"
        rules={{
          required: "Celular es requerido",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Celular debe tener 10 dígitos",
          },
        }}
      />
      <Button
        label="Enviar código"
        onPress={handleOnPress}
        state={isPending ? "loading" : buttonState}
        behaviour="intrinsictWidth"
        size="l"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
});
