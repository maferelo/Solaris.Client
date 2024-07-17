import { factory, primaryKey } from "@mswjs/data";

import { uid } from "@/utils/uid";

const models = {
  user: {
    id: primaryKey(uid),
    phone: String,
    code: String,
  },
};

export const db = factory(models);
