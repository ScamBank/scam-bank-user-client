import { instance } from "@/utils/api/instance";

export const getUsers = async () =>
  instance.get<unknown, ApiResponse<User[]>>("/users");
