import { BellIcon, LogOutIcon, PhoneIcon } from "lucide-react";
import { Navigation } from "./components";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-company px-7 h-16 w-full sticky top-0">
      <strong className="text-lg">Scam bank</strong>
      <Navigation />
      <div>
        <ul className="flex gap-6 [&_li>svg]:size-6 [&_li>svg]:cursor-pointer">
          <li>
            <PhoneIcon />
          </li>
          <li>
            <BellIcon />
          </li>
          <li>
            <LogOutIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};
