import { getUUID } from "../lib/uuid";

const apiUrl = "https://api.flure.com";

export const trackEvent = (
  event: string,
  payload?: Record<string, unknown>,
): Promise<unknown> => {
  const timestamp = Date.now();
  const uuid = getUUID();

  const body = JSON.stringify({ ...payload, timestamp, uuid });

  return fetch(`${apiUrl}/annals/nouser/${event}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};
