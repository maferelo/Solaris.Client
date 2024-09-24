import { StyleSheet } from "react-native";

import { colors } from "@/config/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPositive,
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 16,
  },
  topContainer: {
    alignItems: "center",
    flex: 8,
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center",
  },
});
