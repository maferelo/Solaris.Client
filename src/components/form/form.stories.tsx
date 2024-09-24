import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { Input, InputProps } from "./form";

const InputWithController = (props: Omit<InputProps, "name" | "control">) => {
  const { control } = useForm();
  return <Input {...props} name="input" control={control} />;
};

const meta = {
  args: {
    label: "Input",
    disabled: false,
    keyboardType: "phone-pad",
  },
  component: InputWithController,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
