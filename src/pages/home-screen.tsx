import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";

import { Button, Text } from "@/components";
import { colors } from "@/config/theme";

export type RootStackParamList = {
  Details: undefined;
  Home: undefined;
};

export function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
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
            navigation.navigate("Details");
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
