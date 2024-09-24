import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import {
  NavigationContainer as BaseNavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Sentry from "@sentry/react-native";
import * as SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { IS_DEVELOPMENT } from "@/config/constants";
import { HomeScreen } from "@/screens/homeScreen/homeScreen";
import { LoadingScreen } from "@/screens/loadingScreen/loadingScreen";
import { SendCodeScreen } from "@/screens/sendCodeScreen/sendCodeScreen";
import { WelcomeScreen } from "@/screens/welcomeScreen/welcomeScreen";
import { RootState } from "@/store/store";
import { RootStackParamList } from "@/types/screens";

let routingInstrumentation: Sentry.ReactNavigationInstrumentation;

if (!IS_DEVELOPMENT) {
  routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

  Sentry.init({
    // Disclaimer: it is ok to expose this DSN to the public
    dsn: "https://2360ae10da41b9c1950f60c859ce2122@o1208436.ingest.us.sentry.io/4506945207599104",
    debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
    integrations: [new Sentry.ReactNativeTracing({ routingInstrumentation })],
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    tracesSampleRate: 1.0,
  });
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NavigationContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const navigationRef = useNavigationContainerRef();
  const isSignedIn = useSelector((state: RootState) => state.auth.loggedIn);

  useReactNavigationDevTools(navigationRef);

  useEffect(() => {
    (async function () {
      console.log(await SecureStore.getItemAsync("token"));
    })();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BaseNavigationContainer
      ref={navigationRef}
      onReady={() => {
        if (!IS_DEVELOPMENT) {
          routingInstrumentation.registerNavigationContainer(navigationRef);
        }
      }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {isSignedIn ? (
          <Stack.Screen component={HomeScreen} name="Home" />
        ) : (
          <>
            <Stack.Screen component={WelcomeScreen} name="Welcome" />
            <Stack.Screen component={SendCodeScreen} name="SendCode" />
          </>
        )}
      </Stack.Navigator>
    </BaseNavigationContainer>
  );
}
