import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/reactQuery";
import { ProviderProps } from "@/types/providers";

export const QueryClient = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
