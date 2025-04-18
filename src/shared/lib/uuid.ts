import { storage } from "./storage";

const STORAGE_KEY = "uuid";

export const getUUID = () => {
  let uuid = storage.get(STORAGE_KEY);

  try {
    if (!uuid) {
      uuid = crypto.randomUUID();
      storage.set(STORAGE_KEY, uuid);
    }

    return uuid;
  } catch (e) {
    return "";
  }
};
