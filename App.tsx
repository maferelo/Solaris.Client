import * as Sentry from "@sentry/react-native";

import {
  IS_STORYBOOK_ENABLED,
  IS_RUNNING_IN_EXPO_GO,
} from "@/config/constants";
import { NavigationContainer } from "@/navigation/navigation";
import { ErrorBoundary } from "@/providers/errorBoundary";
import { RootSiblingParent } from "@/providers/rootSiblingParent";
import { Store } from "@/providers/store";
import { Theme } from "@/providers/theme";

function App() {
  return (
    <ErrorBoundary>
      <Store>
        <Theme>
          <RootSiblingParent>
            <NavigationContainer />
          </RootSiblingParent>
        </Theme>
      </Store>
    </ErrorBoundary>
  );
}

export default IS_STORYBOOK_ENABLED
  ? require("./.storybook").default
  : IS_RUNNING_IN_EXPO_GO
    ? App
    : Sentry.wrap(App);
