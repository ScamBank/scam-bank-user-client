import { z } from "zod";

export const formSchema = z.object({
  PhoneNumber: z
    .string()
    .regex(
      /^\+7-\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
      "Неверный формат телефонного номера",
    ),
});
