"use client";

import * as Dialog from "@radix-ui/react-dialog";

export function ConfirmDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-[40%] left-1/2 w-[400px] -translate-x-1/2 rounded-lg bg-white p-6 shadow-xl dark:bg-neutral-900">
          <Dialog.Title className="text-lg font-bold">
            Сопоставление сохранено
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-neutral-500">
            Платёж успешно сопоставлен со счётом.
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <Dialog.Close asChild>
              <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                ОК
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
