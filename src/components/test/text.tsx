import { Text as BaseText, TextProps as BaseTextProps } from "@rneui/themed";

type Sizes = "xs" | "s" | "m" | "l";
type Variants = "paragraph" | "label" | "heading" | "display";

export const textStyles = {
  paragraph: {
    xs: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 20,
    },
    s: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 20,
    },
    m: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24,
    },
    l: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 28,
    },
  },
  label: {
    xs: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 20,
    },
    s: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 16,
    },
    m: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 20,
    },
    l: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 24,
    },
  },
  heading: {
    xs: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 32,
    },
    s: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 36,
    },
    m: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 40,
    },
    l: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 48,
    },
  },
  display: {
    xs: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 44,
    },
    s: {
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 52,
    },
    m: {
      fontSize: 52,
      fontWeight: 700,
      lineHeight: 64,
    },
    l: {
      fontSize: 96,
      fontWeight: 700,
      lineHeight: 112,
    },
  },
} satisfies Record<Variants, Record<Sizes, BaseTextProps["style"]>>;

export interface TextProps {
  children: React.ReactNode;
  size?: Sizes;
  variant?: Variants;
}

export const Text = ({
  children,
  size = "m",
  variant = "paragraph",
}: Readonly<TextProps>) => {
  return <BaseText style={textStyles[variant][size]}>{children}</BaseText>;
};
