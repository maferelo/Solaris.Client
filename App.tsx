import * as Sentry from "@sentry/react-native";

import { IS_STORYBOOK_ENABLED, IS_DEVELOPMENT } from "@/config/constants";
import { NavigationContainer } from "@/navigation/navigation";
import { ErrorBoundary } from "@/providers/errorBoundary";
import { QueryClient } from "@/providers/queryClient";
import { RootSiblingParent } from "@/providers/rootSiblingParent";
import { Store } from "@/providers/store";
import { Theme } from "@/providers/theme";

function App() {
  return (
    <ErrorBoundary>
      <Store>
        <QueryClient>
          <Theme>
            <RootSiblingParent>
              <NavigationContainer />
            </RootSiblingParent>
          </Theme>
        </QueryClient>
      </Store>
    </ErrorBoundary>
  );
}

export default IS_STORYBOOK_ENABLED
  ? require("./.storybook").default
  : IS_DEVELOPMENT
    ? App
    : Sentry.wrap(App);
