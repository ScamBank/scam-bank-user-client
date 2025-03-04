import { instance } from "@/utils/api/instance";

export const getUsers = async () => await instance.get<User[]>("/users/");
