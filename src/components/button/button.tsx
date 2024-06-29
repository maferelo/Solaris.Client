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

const behaviours = {
  fixedWidth: {},
  intrinsictWidth: {
    containerStyle: {
      width: "100%",
    },
  },
} satisfies ButtonVariant;

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
  behaviour?: keyof typeof behaviours;
  hierarchy?: keyof typeof hierarchies;
  label?: string;
  onPress?: () => void;
  shape?: keyof typeof shapes;
  size?: keyof typeof sizes;
  state?: keyof typeof states;
  width?: number;
}

export const Button = ({
  behaviour = "intrinsictWidth",
  shape = "rect",
  size = "m",
  label,
  hierarchy = "primary",
  state = "active",
  width,
  ...props
}: Readonly<ButtonProps>) => {
  return (
    <BaseButton
      raised
      title={label}
      {...props}
      {...behaviours[behaviour]}
      {...shapes[shape]}
      {...sizes[size]}
      {...states[state]}
      {...hierarchies[hierarchy]}
      {...(width && { containerStyle: { width } })}
    />
  );
};
