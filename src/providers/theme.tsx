import { ThemeProvider } from "@rneui/themed";
import { ReactNode } from "react";

import { theme } from "@/config/theme";

type ProviderProps = {
  children: ReactNode;
};

export const Theme = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
