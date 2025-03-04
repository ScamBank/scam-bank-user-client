import { getUsers } from "@/utils/api/requests/get";
import { ClientCard } from "./(components)/ClientCard/ClientCard";

const ClientsPage = async () => {
  const users = await getUsers();
  console.log(users.data);

  return (
    <main className=" p-6">
      <ul className="w-full flex flex-col gap-4 items-center justify-center">
        {users.data.map((user) => (
          <li key={user.id}>
            <ClientCard user={user} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ClientsPage;
