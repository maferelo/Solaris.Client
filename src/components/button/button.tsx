import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
  Colors,
} from "@rneui/themed";

type Color = keyof Colors;

interface ButtonVariant {
  [key: string]: {
    [key in keyof Omit<RNEButtonProps, "color">]: RNEButtonProps[key];
  } & {
    color?: Color;
  };
}

const shapes = {
  pill: {
    radius: 28,
  },
  rect: {
    radius: 28,
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
  },
  m: {
    size: "md",
  },
  l: {
    size: "lg",
  },
} satisfies ButtonVariant;

const hierarchies = {
  primary: {
    color: "primaryA",
  },
  secondary: {
    color: "primaryB",
  },
  tertiary: {
    color: "primaryB",
    type: "clear",
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
    <RNEButton
      title={label}
      {...props}
      {...shapes[shape]}
      {...sizes[size]}
      {...hierarchies[hierarchy]}
      {...states[state]}
    />
  );
};
