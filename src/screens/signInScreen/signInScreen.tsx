import { useEffect } from "react";
import { View } from "react-native";
import Toast from "react-native-root-toast";

import { styles } from "./styles";

import { Text } from "@/components/text/text";

export function SignInScreen() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      Toast.show("Código de seguridad enviado", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
      });
    }, 8000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <View style={styles.container} testID="home">
      <Text variant="label" size="l">
        +57 3001234567
      </Text>
    </View>
  );
}
