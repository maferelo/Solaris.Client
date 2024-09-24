import { ThemeProvider } from "@rneui/themed";

import { theme } from "@/config/theme";
import { ProviderProps } from "@/types/providers";

export const Theme = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
