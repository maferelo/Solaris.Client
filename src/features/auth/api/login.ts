import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";

interface LogInData {
  code: string;
  phone: string;
}

export const logIn = (data: LogInData): Promise<any> => {
  return apiClient.post(
    "/auth/login",
    JSON.stringify({
      phone: data.phone,
      code: data.code,
    }),
  );
};

type UseLoginOptions = {
  onSuccess?: () => void;
};

export const useLogin = ({ onSuccess }: UseLoginOptions = {}) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: logIn,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["auth-user"], user);
      onSuccess?.();
    },
  });
  return { submit, isPending };
};
