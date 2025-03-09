import { instance } from "@/utils/api/instance";
import { FetchesRequestConfig } from "@siberiacancode/fetches";

interface DrawAccountBody {
  AccountGuid: string;
  Amount: number;
}

type DrawAccountRequestConfig = FetchesRequestConfig<DrawAccountBody>;

export const postDrawAccount = async ({
  params,
  config,
}: DrawAccountRequestConfig) =>
  instance.post<unknown, ApiResponse<{}>>(
    "/core1c/kondakov_patterns_core/hs/BankSystem/WithdrawMoney",
    { AccountGuid: params.AccountGuid, Amount: params.Amount },
    { ...config },
  );
