import { getUserCredits } from "@/utils/api/requests/get";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { CreditCard } from "./(components)";

const MyCreditsPage = async () => {
  const cookieStore = await cookies();
  const guid = cookieStore.get("guid")?.value!;
  const creditsResponse = await getUserCredits({
    params: {
      UserGuid: guid,
    },
  });

  if (!creditsResponse.success) return notFound();

  return (
    <main className="p-6 flex w-full items-center justify-center">
      {creditsResponse.data.length === 0 && <p>Нет кредитов</p>}
      <ul className="flex gap-3 flex-wrap">
        {creditsResponse.data.map((credit) => (
          <li key={credit.CreditGuid}>
            <CreditCard credit={credit} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MyCreditsPage;
