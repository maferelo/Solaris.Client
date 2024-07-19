import { factory, primaryKey } from "@mswjs/data";

const models = {
  user: {
    id: primaryKey(Number),
    phone: String,
    code: String,
  },
};

export const db = factory(models);
