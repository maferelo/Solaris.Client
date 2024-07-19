import { StyleSheet } from "react-native";

import { colors } from "@/config/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPositive,
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
  },
});
