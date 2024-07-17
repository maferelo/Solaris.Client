import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";

import { Button } from "@/components/button/button";
import { Text } from "@/components/text/text";
import { colors } from "@/config/theme";
import { RootStackParamList } from "@/types/screens";

export function WelcomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Welcome">) {
  return (
    <View style={styles.container} testID="home">
      <View style={styles.topContainer}>
        <Text variant="display" size="l">
          Omibus
        </Text>
        <Text variant="display" size="m">
          Muevete tranquilo
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          label="Iniciar"
          size="l"
        />
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
