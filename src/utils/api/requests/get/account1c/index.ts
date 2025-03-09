import { Account } from "@/app/accounts/(components)";
import { instance } from "@/utils/api/instance";
import { FetchesRequestConfig } from "@siberiacancode/fetches";

export interface GetUserAccountsParams {
  UserGuid: string;
}

export type GetUserAccountsRequestConfig =
  FetchesRequestConfig<GetUserAccountsParams>;

export const getUserAccounts = async ({
  params,
  config,
}: GetUserAccountsRequestConfig) =>
  instance.get<any>(
    "/kondakov_patterns_core/hs/BankSystem/GetAccountsOfUser",
    {},
  );
