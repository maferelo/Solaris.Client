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
    getValues,
  } = useForm<SendCodeData>({ mode: "onChange" });

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

  useEffect(() => {
    if (codeIsValid && phoneIsValid) {
      codeHandleSubmit((data) => {
        console.log({
          ...data,
          phone: getValues("phone"),
        });
      })();
    }
  }, [codeIsValid]);

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
        testID="phone-input"
      />
      <Input
        control={codeControl}
        disabled={codeDisabled}
        variant="code"
        label="Código"
        name="code"
        rules={{
          required: "Código es requerido",
        }}
        testID="code-input"
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
