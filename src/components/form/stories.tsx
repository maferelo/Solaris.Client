import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./form";

const MyInputFieldMeta: Meta<typeof Input> = {
  component: Input,
};

export default MyInputFieldMeta;

export const Solid: StoryObj<typeof Input> = {
  args: { variant: "solid" },
};
