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

import { Eye } from "lucide-react";
import { ComponentProps, useState } from "react";

export interface Account {
  accountNumber: string;
  currency: "rub" | "dollar";
  count: number;
}
interface AccountsTableProps extends ComponentProps<"div"> {
  accounts: Account[];
}

export const AccountsTable = ({
  accounts,
  className,
  ...props
}: AccountsTableProps) => {
  const [userAccounts] = useState<Account[]>(accounts);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formatAccountNumber = (accountNumber: string) => {
    return `•••• •••• •••• ${accountNumber.slice(-4)}`;
  };

  const getCurrencySymbol = (currency: "rub" | "dollar") => {
    return currency === "dollar" ? "$" : "₽";
  };

  const formatAmount = (amount: number, currency: "rub" | "dollar") => {
    return `${getCurrencySymbol(currency)} ${amount.toLocaleString()}`;
  };

  const viewAccountDetails = (account: Account) => {
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
                <TableRow key={account.accountNumber}>
                  <TableCell className="font-medium">
                    {formatAccountNumber(account.accountNumber)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        account.currency === "dollar" ? "default" : "secondary"
                      }
                    >
                      {account.currency === "dollar" ? "USD" : "RUB"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {formatAmount(account.count, account.currency)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => viewAccountDetails(account)}
                      aria-label="View account details"
                    >
                      <Eye className="h-4 w-4" />
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
                <div className="text-sm">{selectedAccount.accountNumber}</div>

                <div className="text-sm font-medium">Валюта:</div>
                <div className="text-sm">
                  {selectedAccount.currency === "dollar"
                    ? "US Dollar (USD)"
                    : "Russian Ruble (RUB)"}
                </div>

                <div className="text-sm font-medium">Баланс:</div>
                <div className="text-sm font-bold">
                  {formatAmount(
                    selectedAccount.count,
                    selectedAccount.currency,
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
