import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@rneui/themed";

import { colors, Colors } from "@/config/theme";

interface ButtonVariant {
  [key: string]: {
    [key in keyof Omit<BaseButtonProps, "color">]: BaseButtonProps[key];
  } & {
    color?: Colors;
  };
}

const shapes = {
  pill: {
    radius: 28,
  },
  rect: {
    radius: 8,
  },
  square: {
    radius: 0,
  },
  circle: {
    radius: 0,
  },
} satisfies ButtonVariant;

const sizes = {
  s: {
    size: "sm",
    buttonStyle: {
      height: 36,
    },
  },
  m: {
    size: "md",
    buttonStyle: {
      height: 48,
    },
  },
  l: {
    size: "lg",
    buttonStyle: {
      height: 56,
    },
  },
} satisfies ButtonVariant;

const hierarchies = {
  primary: {
    color: "backgroundInversePrimary",
  },
  secondary: {
    color: "backgroundTertiary",
    titleStyle: { color: colors.contentPrimary },
  },
  tertiary: {
    type: "clear",
    titleStyle: { color: colors.contentPrimary },
  },
} satisfies ButtonVariant;

const states = {
  active: {
    disabled: false,
  },
  disabled: {
    disabled: true,
  },
  loading: {
    loading: true,
  },
} satisfies ButtonVariant;

export interface ButtonProps {
  hierarchy?: keyof typeof hierarchies;
  label?: string;
  onPress?: () => void;
  shape?: keyof typeof shapes;
  size?: keyof typeof sizes;
  state?: keyof typeof states;
}

export const Button = ({
  shape = "rect",
  size = "m",
  label,
  hierarchy = "primary",
  state = "active",
  ...props
}: Readonly<ButtonProps>) => {
  return (
    <BaseButton
      title={label}
      {...props}
      {...shapes[shape]}
      {...sizes[size]}
      {...hierarchies[hierarchy]}
      {...states[state]}
    />
  );
};
