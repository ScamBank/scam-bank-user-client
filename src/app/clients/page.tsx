import { getUsers } from "@/utils/api/requests/get";
import { ClientCard } from "./(components)/ClientCard/ClientCard";
import { CreateUserForm } from "./(components)/CreateUserForm/CreateUserForm";

const ClientsPage = async () => {
  const users = await getUsers();

  return (
    <main className="py-6 flex justify-evenly">
      <CreateUserForm />
      <ul className="flex flex-col gap-4 ">
        {users.success &&
          users.data.map((user) => (
            <li key={user.id}>
              <ClientCard user={user} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default ClientsPage;
