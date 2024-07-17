import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";

export const logIn = (data: any): Promise<any> => {
  return apiClient.post(
    "/auth/login",
    JSON.stringify({
      username: "emylys",
      password: "emilyspass",
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
