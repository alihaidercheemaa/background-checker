import { z } from "zod";

export const QuoteFormSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .max(50, {
      message: "First name must be at most 50 characters.",
    }),
  last_name: z
    .string()
    .trim()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .max(50, {
      message: "Last name must be at most 50 characters.",
    }),
  contact_number: z
    .string()
    .trim()
    .min(11, {
      message: "Contact number must be at least 11 characters.",
    })
    .max(15, {
      message: "Contact number must be at most 15 characters.",
    }),
  email: z
    .string()
    .trim()
    .email({
      message: "Invalid email address.",
    })
    .max(100, {
      message: "Email must be at most 100 characters.",
    }),
  type_of_cargo: z.enum(
    ["ABC", "ABC", "ABC", "ABC", "ABC"],
    {
      message: "Please select a service.",
    }
  ),
  type_of_transportation: z.enum(
    ["ABC", "ABC", "ABC"],
    {
      message: "Please select a industry.",
    }
  ),
  message: z
    .string()
    .trim()
    .max(500, {
      message: "Message must be at most 500 characters.",
    })
    .optional(),
});
