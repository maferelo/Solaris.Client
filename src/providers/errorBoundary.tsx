import { ErrorBoundary as ErrorBoundaryBase } from "@sentry/react-native";
import { Text } from "react-native";

import { ProviderProps } from "@/types/providers";

export const ErrorBoundary = ({ children }: ProviderProps) => {
  return (
    <ErrorBoundaryBase
      fallback={<Text>Something went wrong</Text>}
      onError={console.error}
    >
      {children}
    </ErrorBoundaryBase>
  );
};
