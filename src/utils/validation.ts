import { z } from "zod";

export const matchSchema = z.object({
  paymentId: z
    .string()
    .min(1, "Поле обязательно")
    .transform((val) => Number(val)),
  invoiceId: z
    .string()
    .min(1, "Поле обязательно")
    .transform((val) => Number(val)),
  note: z.string().min(3, "Комментарий обязателен"),
});


export type MainFormValues = z.infer<typeof matchSchema>;
