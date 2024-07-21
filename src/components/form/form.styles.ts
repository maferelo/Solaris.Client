import { StyleSheet } from "react-native";

import { colors } from "@/config/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 0,
  },
  inputContainer: {
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.backgroundTertiary,
    borderBottomWidth: 0,
    height: 36,
  },
  inputStyle: {
    fontSize: 20,
    color: colors.primaryA,
  },
  labelStyle: {
    fontSize: 16,
    color: colors.primaryA,
  },
  disabledLabelStyle: {
    color: colors.contentStateDisabled,
  },
});
