import { useEffect } from "react";
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
  const { submit, isPending } = useSendCode({ onSuccess });
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isValid },
  } = useForm<SendCodeData>({ mode: "onChange" });

  useEffect(() => {
    if (isValid) handleSubmit((data) => submit(data))();
  }, [isValid]);

  useEffect(() => {
    setFocus("phone");
  }, []);

  return (
    <View style={styles.container}>
      <Input
        control={control}
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
