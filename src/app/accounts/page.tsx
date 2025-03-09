import { cookies } from "next/headers";
import { AccountsTable, CreateAccountButton } from "./(components)";
import { getUserAccounts } from "@/utils/api/requests/get/account1c";
import { notFound } from "next/navigation";

const AccountsPage = async () => {
  const cookieStore = await cookies();
  const userGuid = cookieStore.get("userGuid")?.value!;
  console.log("@guid", userGuid);
  const accountsResponse = await getUserAccounts({
    params: { UserGuid: "8a2e4702-fc13-11ef-81a1-005056bc249c" },
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
