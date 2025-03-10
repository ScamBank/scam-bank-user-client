"use client";

import {
  Badge,
  Button,
  Card,
  CardContent,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";

import { Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";

interface AccountsTableProps extends ComponentProps<"div"> {
  accounts: Account1c[];
}

export const AccountsTable = ({ accounts, className }: AccountsTableProps) => {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<Account1c | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formatAccountNumber = (accountNumber: string) => {
    return `•••• •••• •••• ${accountNumber.slice(-4)}`;
  };

  const formatAmount = (amount: number, currency: "RUB" | "USD") => {
    return ` ${amount.toLocaleString()} ${currency === "RUB" ? "₽" : "$"}`;
  };

  const viewAccountDetails = (account: Account1c) => {
    setSelectedAccount(account);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className={className}>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Номер счета</TableHead>
                <TableHead>Валюта</TableHead>
                <TableHead className="text-right">Баланс</TableHead>
                <TableHead className="w-[100px]">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow
                  key={account.Account}
                  onClick={() =>
                    router.push(`/accounts/${account.AccountGuid}`)
                  }
                >
                  <TableCell className="font-medium">
                    {formatAccountNumber(account.Account)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        account.Currency === "RUB" ? "default" : "secondary"
                      }
                    >
                      {account.Currency === "RUB" ? "RUB" : "USD"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {formatAmount(account.Balance, account.Currency)}
                  </TableCell>
                  <TableCell className="flex gap-2 items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        viewAccountDetails(account);
                      }}
                      aria-label="View account details"
                    >
                      <Eye className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("delete account");
                        router.refresh();
                      }}
                    >
                      <Trash className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Детали счета</DialogTitle>
          </DialogHeader>
          {selectedAccount && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium">Номер счета</div>
                <div className="text-sm">{selectedAccount.Account}</div>

                <div className="text-sm font-medium">Валюта:</div>
                <div className="text-sm">
                  {selectedAccount.Currency === "RUB"
                    ? "Russian Ruble (RUB)"
                    : "US Dollar (USD)"}
                </div>

                <div className="text-sm font-medium">Баланс:</div>
                <div className="text-sm font-bold">
                  {formatAmount(
                    selectedAccount.Balance,
                    selectedAccount.Currency,
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
