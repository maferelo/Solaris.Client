import { View } from "react-native";
import Toast from "react-native-root-toast";

import { styles } from "./styles";

import { SendCodeForm } from "@/features/auth";

export function SendCodeScreen() {
  const onSuccess = () => {
    Toast.show("Código de seguridad enviado", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });
  };
  return (
    <View style={styles.container} testID="home">
      <SendCodeForm onSuccess={onSuccess} />
    </View>
  );
}
