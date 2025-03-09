import { Button } from "@/components/ui";
import { AccountsTable } from "./(components)";
import { getUserAccounts } from "@/utils/api/requests/get/account1c";

const AccountsPage = async () => {
  const accountsResponse = await getUserAccounts({
    params: { UserGuid: "8a2e4702-fc13-11ef-81a1-005056bc249c" },
  });

  return (
    <main className="py-6 flex  gap-6 flex-col items-center justify-center w-1/3 mx-auto">
      <AccountsTable accounts={accountsResponse.data} className="w-full" />
      <Button size="lg" className="w-full">
        Новый счет
      </Button>
    </main>
  );
};

export default AccountsPage;
