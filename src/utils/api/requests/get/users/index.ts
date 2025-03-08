import { instance } from "@/utils/api/instance";

export const getUsers = async () =>
  instance.get<User[]>("/users", { next: { tags: ["users"] } });
