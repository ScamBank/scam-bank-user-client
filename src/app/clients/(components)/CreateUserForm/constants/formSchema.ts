import { isValid, parse } from "date-fns";
import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50),
  middleName: z.string().max(50).optional(),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50),
  phoneNumber: z
    .string()
    .regex(/^\+7-\(\d{3}\)-\d{3}-\d{2}-\d{2}$/, "Invalid phone number format"),
  email: z.string().email("Invalid email address").optional(),
  snils: z
    .string()
    .regex(
      /^\d{3}-\d{3}-\d{3}\s\d{2}$/,
      "SNILS format should be XXX-XXX-XXX XX",
    ),
  passport: z
    .string()
    .regex(/^\d{4}\s\d{6}$/, "Passport format should be XXXX XXXXXX"),
  birthDate: z
    .string({
      required_error: "Birth date is required",
    })
    .refine(
      (dateStr) => {
        const date = parse(dateStr, "dd.MM.yyyy", new Date());
        return isValid(date) && date < new Date();
      },
      { message: "Birth date must be a valid past date (DD.MM.YYYY)" },
    ),
});
