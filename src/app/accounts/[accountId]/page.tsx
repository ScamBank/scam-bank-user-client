import { getAccountInfo } from "@/utils/api/requests/get";
import { notFound } from "next/navigation";
import { AccountInfoCard } from "./(components)";

const AccountInfoPage = async ({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) => {
  const { accountId } = await params;
  const accountInfoResponse = await getAccountInfo({
    params: { AccountGuid: accountId },
  });

  if (!accountInfoResponse.success) return notFound();

  return (
    <main className="py-6 w-1/3 mx-auto">
      <AccountInfoCard accountInfo={accountInfoResponse.data} />
    </main>
  );
};

export default AccountInfoPage;
