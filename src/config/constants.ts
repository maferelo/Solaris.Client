import Constants from "expo-constants";

export const API_URL = "http://0.0.0.0:8000";
export const IS_DEVELOPMENT =
  Constants.appOwnership === "expo" || Constants.appOwnership == null;
export const IS_STORYBOOK_ENABLED =
  Constants.expoConfig?.extra?.storybookEnabled === "true";
export const DEFAULT_PHONE_NUMBER_COUNTRY_CODE = "CO";
