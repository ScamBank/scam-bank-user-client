import fetches from "@siberiacancode/fetches";

export const instance = fetches.create({
  baseURL: process.env.API_URL || "http://localhost:4000/gateway",
});

instance.interceptors.request.use(
  (config) => {
    console.log(`------------------------------------------`);
    console.log(`${config.method?.toUpperCase()} request on: ${config.url}`);
    console.log(`Cache: ${config.next?.tags}`);
    console.log(`------------------------------------------`);
    return config;
  },
  (error) => Promise.reject(error),
);
