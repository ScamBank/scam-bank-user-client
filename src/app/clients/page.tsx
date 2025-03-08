import { getUsers1c } from "@/utils/api/requests/get";
import { ClientCard, CreateUserForm } from "./(components)";

export const dynamic = "force-dynamic";

const ClientsPage = async () => {
  const users1c = await getUsers1c();
  const users1cData = JSON.parse(users1c.data as unknown as string) as User1c[];

  return (
    <main className="py-6 flex justify-evenly">
      <div className="relative w-full max-w-lg">
        <CreateUserForm />
      </div>
      <ul className="flex flex-col gap-4 ">
        {users1c.success &&
          users1cData.map((user, index) => (
            <li key={index}>
              <ClientCard user={user} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default ClientsPage;
