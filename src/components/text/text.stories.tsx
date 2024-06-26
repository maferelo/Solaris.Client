import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const TextWithValue = () => <Text>Text</Text>;

const MyInputFieldMeta: Meta<typeof Text> = {
  component: TextWithValue,
};

export default MyInputFieldMeta;

export const Solid: StoryObj<typeof Text> = {
  args: { variant: "solid" },
};
