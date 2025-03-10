import { getCreditTariffs } from "@/utils/api/requests/get";
import { CreditTariffCard } from "./(components)";

const CreditsPage = async () => {
  const creditsTariffsResponse = await getCreditTariffs({});

  return (
    <main className="p-6 flex gap-6 flex-col items-center justify-center w-full mx-auto">
      <ul className="flex flex-wrap gap-6 justify-center">
        {creditsTariffsResponse.success &&
          creditsTariffsResponse.data.map((tariff) => (
            <li key={tariff.TariffGuid}>
              <CreditTariffCard tariff={tariff} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default CreditsPage;
