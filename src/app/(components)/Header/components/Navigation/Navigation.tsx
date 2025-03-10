"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const navLinkClassName = (href: string) => {
    return cn(
      "h-full flex items-center border-b-4 border-transparent",
      pathname.startsWith(href) ? "opacity-100 border-black" : "opacity-50",
    );
  };

  return (
    <nav className="h-full">
      <ul className={"flex h-full items-center gap-10 [&_li]:font-medium"}>
        <li className={navLinkClassName(ROUTES.ACCOUNTS)}>
          <Link href={ROUTES.ACCOUNTS}>Счета</Link>
        </li>
        <li className={navLinkClassName(ROUTES.CREDITS)}>
          <Link href={ROUTES.CREDITS}>Кредиты</Link>
        </li>
        <li className={navLinkClassName(ROUTES.CREDITS_MY)}>
          <Link href={ROUTES.CREDITS_MY}>Мои Кредиты</Link>
        </li>
        {/* <li className={navLinkClassName(ROUTES.CLIENTS)}>
          <Link href={ROUTES.CLIENTS}> Клиенты </Link>
        </li> */}
      </ul>
    </nav>
  );
};
