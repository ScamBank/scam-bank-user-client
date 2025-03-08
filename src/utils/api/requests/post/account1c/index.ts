import { instance } from "@/utils/api/instance";
import { FetchesRequestConfig } from "@siberiacancode/fetches";

interface PostAccountCreateRequestParams {
  UserGuid: string;
}

type PostAccountCreateRequestConfig =
  FetchesRequestConfig<PostAccountCreateRequestParams>;

export const postAccountCreate = async ({
  params,
  config,
}: PostAccountCreateRequestConfig) =>
  instance.post<unknown, ApiResponse<{}>>(
    "/kondakov_patterns_core/hs/BankSystem/OpenAnAccount",
    { UserGuid: params.UserGuid },
    { ...config },
  );
