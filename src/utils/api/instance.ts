import fetches from "@siberiacancode/fetches";

export const instance = fetches.create({
  baseURL: process.env.API_URL || "http://localhost:4000/gateway",
});
