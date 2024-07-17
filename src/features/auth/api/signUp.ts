import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export const signUp = (): Promise<any> => {
  return apiClient.post(
    "/auth/signup",
    JSON.stringify({
      username: "emylys",
      password: "emilyspass",
    }),
  );
};

type UseSignUpOptions = {
  onSuccess?: () => void;
};

export const useSignUp = ({ onSuccess }: UseSignUpOptions = {}) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      onSuccess?.();
    },
  });
  return { submit, isPending };
};
