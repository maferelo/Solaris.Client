import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "./input-field";

const MyInputFieldMeta: Meta<typeof InputField> = {
  component: InputField,
};

export default MyInputFieldMeta;

export const Solid: StoryObj<typeof InputField> = {
  args: { variant: "solid" },
};
