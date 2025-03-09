import fetches from "@siberiacancode/fetches";

export const instance = fetches.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api",
});

instance.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method?.toUpperCase()} request on: ${config.url}\nCache: ${config.next?.tags}`,
    );
    return config;
  },
  (error) => error,
);

instance.interceptors.response.use(
  (response) => ({ ...response, success: true }),
  (error) => ({ error: { ...error.response }, success: false }),
);
