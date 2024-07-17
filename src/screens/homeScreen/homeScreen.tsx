import { View } from "react-native";

import { styles } from "./styles";

import { Button } from "@/components/button/button";
import { Text } from "@/components/text/text";

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
