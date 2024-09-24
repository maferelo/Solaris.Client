import { StrictRequest } from "msw";

import { db } from "./db";

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

export const authenticate = ({
  phone,
  code,
}: {
  phone: string;
  code: string;
}) => {
  const user = db.user.findFirst({
    where: {
      phone: {
        equals: phone,
      },
    },
  });

  if (user?.code === code) {
    return {
      token: AUTH_TOKEN,
    };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const requireAuth = (req: StrictRequest<any>) => {
  const authorization = req.headers.get("Authorization");

  if (!authorization) {
    return null;
  }

  const token = authorization.replace("Token ", "");

  if (token === AUTH_TOKEN) {
    return true;
  }

  return null;
};
