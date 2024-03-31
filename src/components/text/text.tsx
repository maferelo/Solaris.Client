import { Text as RNEText } from "@rneui/themed";

const variants = {
  clear: {},
  outline: {},
  solid: {},
};

export interface TextFieldProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export const Text = ({
  children,
  variant = "solid",
  ...props
}: TextFieldProps) => {
  return (
    <RNEText {...props} {...variants[variant]}>
      {children}
    </RNEText>
  );
};
