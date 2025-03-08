import { instance } from "@/utils/api/instance";

export const getUsers1c = async () =>
  instance.get<unknown, ApiResponse<User1c[]>>(
    "/users1c/kondakov_patterns_userinfo/hs/BankSystem/ViewUsersInfo",
  );
