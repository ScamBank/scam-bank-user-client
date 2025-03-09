import { Button } from "@/components/ui";
import { Account, AccountsTable } from "./(components)";

const sampleAccounts: Account[] = [
  { accountNumber: "4012888888881881", currency: "dollar", count: 5420 },
  { accountNumber: "5105105105105100", currency: "rub", count: 127500 },
  { accountNumber: "3714496353984371", currency: "dollar", count: 8750 },
  { accountNumber: "6011111111111117", currency: "rub", count: 42300 },
  { accountNumber: "3056930009020004", currency: "dollar", count: 3200 },
];

const AccountsPage = async () => {
  return (
    <main className="py-6 flex  gap-6 flex-col items-center justify-center">
      <AccountsTable accounts={sampleAccounts} className="w-1/2" />
      <Button size="lg" className="w-1/2">
        Создать счет
      </Button>
    </main>
  );
};

export default AccountsPage;
