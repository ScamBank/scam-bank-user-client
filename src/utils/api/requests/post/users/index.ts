import { instance } from "@/utils/api/instance";

export const postCreateUser = async (body: CreateUserDto) =>
  instance.post<unknown, ApiResponse<User>>("/users/create", body);
