import React from "react";
import { ThemeProvider } from "@rneui/themed";

import type { Preview } from "@storybook/react";
import { View } from "react-native";
import { theme } from "../src/config/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default preview;
