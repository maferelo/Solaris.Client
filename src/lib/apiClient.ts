import Axios from "axios";
import Toast from "react-native-root-toast";

import { API_URL } from "@/config/constants";

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    Toast.show("Ocurrio un error", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });

    return Promise.reject(error);
  },
);
