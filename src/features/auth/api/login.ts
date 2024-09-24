import { useMutation } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";

import { apiClient } from "@/lib/apiClient";

interface LogInData {
  code: string;
  phone: string;
}

async function setToken(token: string) {
  await SecureStore.setItemAsync("token", token);
}

export const logIn = (data: LogInData): Promise<any> => {
  return apiClient.post(
    "/api/auth/log-in/",
    JSON.stringify({
      phone: data.phone,
      code: data.code,
      group: "rider",
    }),
  );
};

type UseLoginOptions = {
  onSuccess?: () => void;
};

export const useLogin = ({ onSuccess }: UseLoginOptions = {}) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: logIn,
    onSuccess: (res) => {
      setToken(res.access);
      onSuccess?.();
    },
  });
  return { submit, isPending };
};
