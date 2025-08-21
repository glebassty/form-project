"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { payments, invoices } from "@/lib/data";
import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";
import { matchSchema, type MainFormValues } from "@/utils/validation";

export function MainForm() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(matchSchema),
    mode: "onChange",
  });

  const onSubmit = (data: MainFormValues) => {
    console.log("Сохранено:", data);
    setOpen(true);
  };

  return (
    <div className="mx-auto max-w-xl rounded-xl bg-white p-6 dark:bg-neutral-900">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Платёж */}
        <div>
          <label className="mb-1 block text-sm font-medium">Платёж</label>
          <select
            {...register("paymentId")}
            className="w-full cursor-pointer rounded border px-3 py-2 transition hover:border-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            <option value="">Выберите платёж</option>
            {payments.map((p) => (
              <option key={p.id} value={p.id}>
                #{p.id} — {p.customer} ({p.amount} ₽)
              </option>
            ))}
          </select>
          <div className="min-h-[20px]">
            {errors.paymentId && (
              <p className="text-sm text-red-500">{errors.paymentId.message}</p>
            )}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Счёт</label>
          <select
            {...register("invoiceId")}
            className="w-full cursor-pointer rounded border px-3 py-2 transition hover:border-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            <option value="">Выберите счёт</option>
            {invoices.map((i) => (
              <option key={i.id} value={i.id}>
                #{i.id} — {i.customer} ({i.amount} ₽)
              </option>
            ))}
          </select>
          <div className="min-h-[20px]">
            {errors.invoiceId && (
              <p className="text-sm text-red-500">{errors.invoiceId.message}</p>
            )}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Комментарий бухгалтера
          </label>
          <textarea
            {...register("note")}
            className="w-full rounded border px-3 py-2 transition hover:border-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
            rows={3}
          ></textarea>
          <div className="min-h-[20px]">
            {errors.note && (
              <p className="text-sm text-red-500">{errors.note.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-blue-600 py-2 font-semibold text-white shadow transition hover:bg-blue-700 hover:shadow-md focus:ring focus:ring-blue-300 focus:outline-none"
        >
          💾 Сохранить сопоставление
        </button>
      </form>

      <ConfirmDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
