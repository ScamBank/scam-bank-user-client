import { LogoutButton, Navigation } from "./components";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-company-primary px-7 h-16 w-full sticky top-0">
      <h1 className="text-lg font-semibold">Скам Банк</h1>
      <Navigation />
      <div>
        <ul className="flex gap-6 [&_li>svg]:size-5 [&_li>svg]:cursor-pointer">
          <LogoutButton />
        </ul>
      </div>
    </header>
  );
};
