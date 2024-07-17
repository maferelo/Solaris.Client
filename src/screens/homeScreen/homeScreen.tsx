import { StyleSheet, View } from "react-native";

import { Button } from "@/components/button/button";
import { Text } from "@/components/text/text";
import { colors } from "@/config/theme";

export function HomeScreen() {
  return (
    <View style={styles.container} testID="home">
      <View style={styles.topContainer}>
        <Text variant="display" size="m">
          A donde quieres ir?
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button onPress={() => {}} label="Iniciar" size="l" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
