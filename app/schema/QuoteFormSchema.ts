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
  loading_place: z
    .string()
    .trim()
    .min(2, {
      message: "Loading place must be at least 2 characters.",
    })
    .max(100, {
      message: "Loading place must be at most 100 characters.",
    }),
  unloading_place: z
    .string()
    .trim()
    .min(2, {
      message: "Unloading place must be at least 2 characters.",
    })
    .max(100, {
      message: "Unloading place must be at most 100 characters.",
    }),
  payload: z
    .string()
    .trim()
    .nonempty({
      message: "Payload is required.",
    })
    .max(50, {
      message: "Payload must be at most 50 characters.",
    }),
  dimensions: z
    .string()
    .trim()
    .nonempty({
      message: "Dimensions are required.",
    })
    .max(50, {
      message: "Dimensions must be at most 50 characters.",
    }),
  type_of_cargo: z.enum(
    ["Container Cargo", "Liquid Bulk", "Dry Bulk", "Break Bulk", "Others"],
    {
      message: "Please select a valid type of cargo.",
    }
  ),
  type_of_transportation: z.enum(
    ["Air Freight", "Sea Freight", "Road Freight"],
    {
      message: "Please select a valid type of transportation.",
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
