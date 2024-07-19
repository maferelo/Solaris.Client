import Constants from "expo-constants";

export const API_URL = "https://dummyjson.com";
export const IS_DEVELOPMENT = Constants.appOwnership === "expo";
export const IS_STORYBOOK_ENABLED =
  Constants.expoConfig?.extra?.storybookEnabled === "true";
export const DEFAULT_PHONE_NUMBER_COUNTRY_CODE = "CO";
