import { ThemeProvider } from "@rneui/themed";
import { ErrorBoundary } from "@sentry/react-native";
import { ReactNode } from "react";
import { Text } from "react-native";

import { theme } from "@/config/theme";

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary
        fallback={<Text>Something went wrong</Text>}
        onError={console.error}
      >
        {children}
      </ErrorBoundary>
    </ThemeProvider>
  );
};
