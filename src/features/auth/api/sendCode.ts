import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export const sendCode = (data: any): Promise<any> => {
  return apiClient.post("/api/auth/send-code/", JSON.stringify(data));
};

type UseSendCodeOptions = {
  onSuccess?: () => void;
};

export const useSendCode = ({ onSuccess }: UseSendCodeOptions = {}) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: sendCode,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { submit, isPending };
};
