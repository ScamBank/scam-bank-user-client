import { instance } from "@/utils/api/instance";

export const postCreateUser1c = async (body: CreateUserDto1S) =>
  instance.post<unknown, ApiResponse<{ UserGuid: UserGuid }>>(
    "/users1c/kondakov_patterns_userinfo/hs/BankSystem/CreateUser",
    body,
  );
