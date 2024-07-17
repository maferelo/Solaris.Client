import Constants from "expo-constants";

export const API_URL = "https://dummyjson.com/";
export const IS_RUNNING_IN_EXPO_GO = Constants.appOwnership === "expo";
export const IS_STORYBOOK_ENABLED =
  Constants.expoConfig?.extra?.storybookEnabled === "true";
