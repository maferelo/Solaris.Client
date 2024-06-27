import Constants from "expo-constants";

import { App } from "@/pages/_app";

export default Constants.expoConfig?.extra?.storybookEnabled === "true"
  ? require("./.storybook").default
  : App;
