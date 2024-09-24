import { View } from "react-native";

import { styles } from "./styles";

import { Text } from "@/components/text/text";

export function LoadingScreen() {
  return (
    <View style={styles.container} testID="home">
      <Text variant="display" size="l">
        Loading...
      </Text>
    </View>
  );
}
