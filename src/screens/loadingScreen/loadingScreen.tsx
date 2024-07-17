import { StyleSheet, View } from "react-native";

import { Text } from "@/components/text/text";
import { colors } from "@/config/theme";

export function LoadingScreen() {
  return (
    <View style={styles.container} testID="home">
      <Text variant="display" size="l">
        Loading...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPositive,
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
