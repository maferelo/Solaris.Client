import { Color as ThemeColor, Colors as ThemeColors } from "@/config/theme";

type NewColors = {
  [key in ThemeColors]: ThemeColor;
};

declare module "@rneui/themed" {
  interface Colors extends NewColors {}
}
