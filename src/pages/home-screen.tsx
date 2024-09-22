import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";

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
      <Button
        onPress={() => {
          navigation.navigate("Details");
        }}
        label="Go to Details"
        testID="details"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
