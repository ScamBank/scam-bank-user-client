import { cookies } from "next/headers";
import { AccountsTable, CreateAccountButton } from "./(components)";
import { getUserAccounts } from "@/utils/api/requests/get/account1c";
import { notFound } from "next/navigation";

const AccountsPage = async () => {
  const cookieStore = await cookies();
  const userGuid = cookieStore.get("guid")?.value!;

  const accountsResponse = await getUserAccounts({
    params: { UserGuid: userGuid },
  });

  if (!accountsResponse.success) return notFound();

  return (
    <main className="py-6 flex gap-6 flex-col items-center justify-center w-1/3 mx-auto">
      <AccountsTable accounts={accountsResponse.data} className="w-full" />
      <CreateAccountButton />
    </main>
  );
};

export default AccountsPage;
