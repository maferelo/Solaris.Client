import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";

import { useSendCode } from "../../api/sendCode";

import { Input } from "@/components/form/form";
import { Text } from "@/components/text/text";

export type SendCodeFormProps = {
  onSuccess: () => void;
};

export type SendCodeData = {
  phone: string;
};

export type CodeAuthData = {
  code: string;
};

const RESEND_TIMER = 10;

export const SendCodeForm = ({ onSuccess }: SendCodeFormProps) => {
  const [phoneDisabled, phoneSetDisabled] = useState(false);
  const [codeDisabled, codeSetDisabled] = useState(true);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(RESEND_TIMER);
  const { submit, isPending } = useSendCode({ onSuccess });
  const {
    control: phoneControl,
    handleSubmit: phoneHandleSubmit,
    setFocus: phoneSetFocus,
    formState: { isValid: phoneIsValid },
    getFieldState,
  } = useForm<SendCodeData>({ mode: "onChange" });

  const { invalid } = getFieldState("phone");

  const {
    control: codeControl,
    handleSubmit: codeHandleSubmit,
    setFocus: codeSetFocus,
    formState: { isValid: codeIsValid },
  } = useForm<CodeAuthData>({ mode: "onChange" });

  useEffect(() => {
    if (phoneIsValid) {
      phoneHandleSubmit((data) => submit(data))();
      phoneSetDisabled(true);
      codeSetDisabled(false);
      const timeout = setTimeout(() => {
        phoneSetDisabled(false);
        setResendDisabled(false);
      }, 4000);
      return () => clearTimeout(timeout);
    } else {
      codeSetDisabled(true);
    }
  }, [phoneIsValid]);

  useEffect(() => {
    if (codeDisabled === false) {
      codeSetFocus("code");
    }
  }, [codeDisabled]);

  useEffect(() => {
    phoneSetFocus("phone");
  }, []);

  useEffect(() => {
    if (!resendDisabled) {
      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev === 1) {
            setResendDisabled(true);
            return RESEND_TIMER;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendDisabled]);

  return (
    <View style={styles.container}>
      <Input
        control={phoneControl}
        disabled={phoneDisabled}
        label="Celular"
        variant="phone"
        name="phone"
        rules={{
          required: "Celular es requerido",
        }}
      />
      <Input
        control={codeControl}
        disabled={codeDisabled}
        variant="code"
        label="Codigo"
        name="code"
        rules={{
          required: "Código es requerido",
        }}
      />
      {!resendDisabled && <Text>Reenviando código en {resendTimer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
});
