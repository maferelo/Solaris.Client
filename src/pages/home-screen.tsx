import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";

import { Button } from "@/components/button";

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
        <Text>Omibus</Text>
        <Text>Muevete tranquilo</Text>
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
    backgroundColor: "#fff",
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
