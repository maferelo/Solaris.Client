import { RootSiblingParent as RootSiblingParentBase } from "react-native-root-siblings";

import { ProviderProps } from "@/types/providers";

export const RootSiblingParent = ({ children }: ProviderProps) => {
  return <RootSiblingParentBase>{children}</RootSiblingParentBase>;
};
