import { IS_STORYBOOK_ENABLED } from "@/config/constants";
import { App } from "@/pages/_app";

export default IS_STORYBOOK_ENABLED ? require("./.storybook").default : App;
