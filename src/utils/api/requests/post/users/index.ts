import { instance } from "@/utils/api/instance";

export const postCreateUser = async (body: CreateUserDto) =>
  instance.post<User, CreateUserDto>("/users/create", body);
