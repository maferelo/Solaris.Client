import Constants from "expo-constants";

export const IS_RUNNING_IN_EXPO_GO = Constants.appOwnership === "expo";
export const IS_STORYBOOK_ENABLED =
  Constants.expoConfig?.extra?.storybookEnabled === "true";
