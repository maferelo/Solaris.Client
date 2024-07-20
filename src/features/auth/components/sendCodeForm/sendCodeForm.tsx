import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";

import { useSendCode } from "../../api/sendCode";

import { Input } from "@/components/form/form";

export type SendCodeFormProps = {
  onSuccess: () => void;
};

export type SendCodeData = {
  phone: string;
};

export const SendCodeForm = ({ onSuccess }: SendCodeFormProps) => {
  const [disabled, setDisabled] = useState(false);
  const { submit, isPending } = useSendCode({ onSuccess });
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isValid },
  } = useForm<SendCodeData>({ mode: "onChange" });

  useEffect(() => {
    if (isValid) {
      handleSubmit((data) => submit(data))();
      setDisabled(true);
      const timeout = setTimeout(() => {
        setDisabled(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isValid]);

  useEffect(() => {
    setFocus("phone");
  }, []);

  return (
    <View style={styles.container}>
      <Input
        control={control}
        disabled={disabled}
        label="Celular"
        placeholder="Celular"
        name="phone"
        keyboardType="phone-pad"
        rules={{
          required: "Celular es requerido",
        }}
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
