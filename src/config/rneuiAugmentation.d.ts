import { Theme, Colors as RNEColors } from "@rneui/themed";

import { colors } from "@/config/theme";

type CustomColors = typeof colors;

declare module "@rneui/themed" {
  interface Colors extends CustomColors {}
  interface ThemeWithColors extends Theme {
    colors: RNEColors;
  }
}
