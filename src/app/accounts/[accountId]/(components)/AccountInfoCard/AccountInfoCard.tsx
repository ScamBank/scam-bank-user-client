"use client";

import { Card, CardContent } from "@/components/ui";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowRight,
  ArrowUp,
  Users,
  Hash,
  FileText,
  Phone,
} from "lucide-react";
import { ComponentProps, useState } from "react";
import { ru } from "date-fns/locale";
import { TopUpAccountModal } from "./components";
import { cn } from "@/lib/utils";

interface AccountInfoCardProps extends ComponentProps<"div"> {
  accountInfo: AccountInfo;
}

export const AccountInfoCard = ({
  accountInfo,
  className,
  ...props
}: AccountInfoCardProps) => {
  const [topUpModalOpen, setTopUpModalOpen] = useState(false);
  console.log(
    accountInfo.AccountOperations.toSorted(
      (a, b) =>
        new Date(b.OperationDate).getTime() -
        new Date(a.OperationDate).getTime(),
    ),
  );
  return (
    <>
      <div className={cn(className)} {...props}>
        <Card className="mb-4 overflow-hidden">
          <div className="bg-slate-700 p-4">
            <Card className="mb-4 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-medium">Текущий счет</h2>
                  </div>
                  <div className="text-xl font-bold">
                    {accountInfo.Currency === "RUB" ? "₽" : "$"}
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-green-500 font-medium">
                    {accountInfo.Balance}{" "}
                    {accountInfo.Currency === "RUB" ? "₽" : "$"}
                  </div>
                  <div className="text-xs text-green-500">доступно</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <CardContent className="bg-gray-100 p-4">
            <h3 className="font-medium mb-4">Переводы</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div
                className="flex flex-col items-center cursor-pointer [&_div]:hover:brightness-90"
                onClick={() => setTopUpModalOpen(true)}
              >
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <ArrowUp size={20} className="text-gray-700" />
                </div>
                <span className="text-xs text-center text-gray-800">
                  Пополнить счет
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <ArrowRight size={20} className="text-gray-700" />
                </div>
                <span className="text-xs text-center text-gray-800">
                  Между своими счетами
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Phone size={20} className="text-gray-700" />
                </div>
                <span className="text-xs text-center text-gray-800">
                  По номеру телефона
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Users size={20} className="text-gray-700" />
                </div>
                <span className="text-xs text-center text-gray-800">
                  Клиенту банка
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Hash size={20} className="text-gray-700" />
                </div>
                <span className="text-xs text-center text-gray-800">
                  По номеру счета
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <FileText size={20} className="text-gray-700" />
                </div>
                <span className="text-xs text-center text-gray-800">
                  По реквизитам
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xs text-gray-500 mb-3">
                ПОСЛЕДНИЕ ТРАНЗАКЦИИ
              </h3>

              <ul className="space-y-6">
                {accountInfo.AccountOperations.toSorted(
                  (a, b) =>
                    new Date(b.OperationDate).getTime() -
                    new Date(a.OperationDate).getTime(),
                ).map((operation, index) => (
                  <li className="flex justify-between items-start" key={index}>
                    <div>
                      <div className="text-xs text-gray-500">
                        {formatDistanceToNow(
                          new Date(operation.OperationDate),
                          { addSuffix: true, locale: ru },
                        )}
                      </div>
                      <div className="text-sm">
                        {operation.OperationType === "Пополнение"
                          ? "Пополнение"
                          : "Снятие"}
                      </div>
                    </div>
                    {operation.OperationType == "Снятие" ? (
                      <div className="text-red-600 font-medium">
                        {operation.Amount} ₽
                      </div>
                    ) : (
                      <div className="text-green-600 font-medium">
                        +{operation.Amount} ₽
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <TopUpAccountModal
        open={topUpModalOpen}
        onOpenChange={setTopUpModalOpen}
        account={{ ...accountInfo }}
      />
    </>
  );
};
