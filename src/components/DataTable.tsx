"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface TableProps {
  data: any[];
  columns: { key: string; label: string }[];
}

export function DataTable({ data, columns }: TableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white dark:bg-neutral-900">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-100 dark:bg-neutral-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="border-b px-3 py-2 text-left font-medium"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="transition odd:bg-white even:bg-gray-50 hover:bg-blue-50 dark:odd:bg-neutral-900 dark:even:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              {columns.map((col) => (
                <td key={col.key} className="border-b px-3 py-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-end gap-2 border-t p-3 text-sm">
        <button className="cursor-pointer rounded border px-2 py-1 transition hover:bg-gray-100 dark:hover:bg-neutral-700">
          <ChevronLeftIcon />
        </button>

        <button className="cursor-pointer rounded border bg-blue-600 px-3 py-1 text-white shadow hover:bg-blue-700">
          1
        </button>
        <button className="cursor-pointer rounded border px-3 py-1 transition hover:bg-gray-100 dark:hover:bg-neutral-700">
          2
        </button>
        <button className="cursor-pointer rounded border px-3 py-1 transition hover:bg-gray-100 dark:hover:bg-neutral-700">
          3
        </button>

        <button className="cursor-pointer rounded border px-2 py-1 transition hover:bg-gray-100 dark:hover:bg-neutral-700">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
