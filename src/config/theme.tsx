import { createTheme } from "@rneui/themed";

export const colors = {
  black: "#000",
  gray900: "#1A202C",
  gray800: "#2D3748",
  gray700: "#4A5568",
  gray600: "#718096",
  gray500: "#A0AEC0",
  gray400: "#CBD5E0",
  gray300: "#E2E8F0",
  gray200: "#EDF2F7",
  gray100: "#F7FAFC",
  white: "#FFF",
  red900: "#610404",
  red800: "#780A0A",
  red700: "#911111",
  red600: "#A61B1B",
  red500: "#C53030",
  red400: "#DC2626",
  red300: "#EF4444",
  red200: "#F87171",
  red100: "#FECACA",
  orange900: "#6D3B07",
  orange800: "#854D0E",
  orange700: "#A16207",
  orange600: "#B7790D",
  orange500: "#D97706",
  orange400: "#ED8936",
  orange300: "#F6AD55",
  orange200: "#FCD34D",
  orange100: "#FFEDD5",
  amber900: "#7C3A0A",
  amber800: "#A16207",
  amber700: "#C08407",
  amber600: "#D69E2E",
  amber500: "#EAB308",
  amber400: "#F59E0B",
  amber300: "#FBBF24",
  amber200: "#FCD34D",
  amber100: "#FFEDD5",
  yellow900: "#7F4C02",
  yellow800: "#A85502",
  yellow700: "#D97706",
  yellow600: "#EAB308",
  yellow500: "#F59E0B",
  yellow400: "#FBBF24",
  yellow300: "#FCD34D",
  yellow200: "#FDE68A",
  yellow100: "#FFFBCC",
  lime900: "#546605",
  lime800: "#728C23",
  lime700: "#A0A835",
  lime600: "#A7F432",
  lime500: "#84CC16",
  lime400: "#A3E635",
  lime300: "#BEF264",
  lime200: "#D2FDB5",
  lime100: "#F0FBEF",
  green900: "#014D40",
  green800: "#0C6B58",
  green700: "#0D9488",
  green600: "#14B8A6",
  green500: "#2DD4BF",
  green400: "#38A169",
  green300: "#4ADE80",
  green200: "#64E6AF",
  green100: "#E6FFFA",
  teal900: "#0D3331",
  teal800: "#20504F",
  teal700: "#38A89D",
  teal600: "#4DC0B5",
  teal500: "#64D5CA",
  teal400: "#90CDF4",
  teal300: "#9AE6B4",
  teal200: "#A7F3D0",
  teal100: "#E6FFFA",
  blue900: "#0A2E4B",
  blue800: "#0E4B75",
  blue700: "#1A759F",
  blue600: "#2B95D6",
  blue500: "#3182CE",
  blue400: "#4299E1",
  blue300: "#63B3ED",
  blue200: "#90CDF4",
  blue100: "#EBF8FF",
  purple900: "#4C1D95",
  purple800: "#6D28D9",
  purple700: "#7C3AED",
  purple600: "#8B5CF6",
  purple500: "#A78BFA",
  purple400: "#D6BCFA",
  purple300: "#E9D8FD",
  purple200: "#F3E8FF",
  purple100: "#FCF5FF",
  magenta900: "#4C1D95",
  magenta800: "#6D28D9",
  magenta700: "#7C3AED",
  magenta600: "#8B5CF6",
  magenta500: "#A78BFA",
  magenta400: "#D6BCFA",
  magenta300: "#E9D8FD",
  magenta200: "#F3E8FF",
  magenta100: "#FCF5FF",
} as const;

export type Color = (typeof colors)[keyof typeof colors];
export type Colors =
  | "accent"
  | "negative"
  | "positive"
  | "primaryA"
  | "primaryB"
  | "warn";

export const theme = createTheme({
  lightColors: {
    accent: colors.blue500,
    negative: colors.red500,
    positive: colors.green500,
    primaryA: colors.blue500,
    primaryB: colors.blue700,
  },
  mode: "light",
});
