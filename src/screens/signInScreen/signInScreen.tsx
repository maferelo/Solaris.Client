import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-root-toast";

import { Text } from "@/components/text/text";
import { colors } from "@/config/theme";
import { useSignIn } from "@/features/auth";

export function SignInScreen() {
  const signIn = useSignIn();

  useEffect(() => {
    const timerId = setTimeout(() => {
      Toast.show("Código de seguridad enviado", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
      });
      signIn.submit();
      Toast.show("Logged in", {
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
