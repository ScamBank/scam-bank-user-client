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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (response) => {
    console.log(`------------------------------------------`);
    console.log(
      `${response.config.method?.toUpperCase()} request on: ${response.config.url} failed`,
    );
    console.log(
      `Error code - ${response.response.status}, ${response.response.data.message}`,
    );
    console.log(`------------------------------------------`);
    return Promise.reject(response);
  },
);
