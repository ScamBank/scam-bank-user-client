import { z } from "zod";

export const formSchema = z.object({
  amount: z
    .number()
    .min(1, "Сумма не может быть меньше 1")
    .max(10000, "Максимальная сумма пополнения 10000"),
});
