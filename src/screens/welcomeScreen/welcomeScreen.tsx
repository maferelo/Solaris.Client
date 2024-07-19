import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { styles } from "./styles";

import { Button } from "@/components/button/button";
import { Text } from "@/components/text/text";
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
            navigation.navigate("SendCode");
          }}
          label="Iniciar"
          size="l"
        />
      </View>
    </View>
  );
}
