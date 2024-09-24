import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";

interface LogInData {
  code: string;
  phone: string;
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
      console.log("token", res);
      onSuccess?.();
    },
  });
  return { submit, isPending };
};
