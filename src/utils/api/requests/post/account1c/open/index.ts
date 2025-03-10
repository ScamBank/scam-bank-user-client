import { instance } from "@/utils/api/instance";
import { FetchesRequestConfig } from "@siberiacancode/fetches";

export interface OpenAccount1cParams {
  UserGuid: string;
}

export type OpenAccount1cRequestConfig =
  FetchesRequestConfig<OpenAccount1cParams>;

export const postOpenAccount1c = async ({
  params,
  config,
}: OpenAccount1cRequestConfig) =>
  instance.post(
    "/kondakov_patterns_core/hs/BankSystem/OpenAnAccount",
    { UserGuid: params.UserGuid },
    { ...config },
  );
