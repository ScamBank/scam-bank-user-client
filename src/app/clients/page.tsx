import { getUsers } from "@/utils/api/requests/get";
import { ClientCard, CreateUserForm } from "./(components)";

const ClientsPage = async () => {
  const users = await getUsers();

  return (
    <main className="py-6 flex justify-evenly">
      <CreateUserForm />
      <ul className="flex flex-col gap-4 ">
        {users.success &&
          users.data.toReversed().map((user) => (
            <li key={user.id}>
              <ClientCard user={user} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default ClientsPage;
