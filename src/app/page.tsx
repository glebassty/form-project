import { MainForm } from "@/components/MainForm";
import { DataTable } from "@/components/DataTable";
import { payments, invoices } from "@/lib/data";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-center text-2xl font-bold">
        Сопоставление счетов и платежей
      </h1>

      <section className="flex flex-col items-center">
        <div className="w-full max-w-xl">
          <MainForm />
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="mb-4 text-center text-xl font-semibold">Платежи</h2>
        <div className="w-full max-w-4xl">
          <DataTable
            data={payments}
            columns={[
              { key: "id", label: "№" },
              { key: "createdAt", label: "Дата" },
              { key: "type", label: "Тип" },
              { key: "amount", label: "Сумма" },
              { key: "customer", label: "Заказчик" },
              { key: "studentName", label: "ФИО экзаменуемого" },
            ]}
          />
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="mb-4 text-center text-xl font-semibold">Счета</h2>
        <div className="w-full max-w-4xl">
          <DataTable
            data={invoices}
            columns={[
              { key: "id", label: "№" },
              { key: "type", label: "Тип" },
              { key: "studentName", label: "ФИО экзаменуемого" },
              { key: "qualification", label: "Квалификация" },
              { key: "amount", label: "Сумма" },
              { key: "customer", label: "Заказчик" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
