import { Provider } from "react-redux";

import { store } from "@/store/store";
import { ProviderProps } from "@/types/providers";

export const Store = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
