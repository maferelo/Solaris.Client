import { http, HttpResponse, PathParams } from "msw";

import { authenticate } from "../utils";

import { API_URL } from "@/config/constants";

type LoginRequestBody = {
  phone: string;
  code: string;
};

type LoginResponseBody = {
  token: string;
};

const loginHandler = http.post<PathParams, LoginRequestBody, LoginResponseBody>(
  `${API_URL}/auth/login`,
  async ({ request }) => {
    const { phone, code } = await request.json();

    const { token } = authenticate({ phone, code });

    return HttpResponse.json({
      token,
    });
  },
);

const sendCodeHandler = http.post(`${API_URL}/auth/send-code`, async () => {
  return new HttpResponse(null, { status: 200 });
});

export const authHandlers = [loginHandler, sendCodeHandler];
