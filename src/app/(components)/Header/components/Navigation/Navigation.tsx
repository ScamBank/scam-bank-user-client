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
      pathname === href ? "opacity-100 border-black" : "opacity-50",
    );
  };

  return (
    <nav className="h-full">
      <ul className={"flex h-full items-center gap-10 [&_li]:font-medium"}>
        <li className={navLinkClassName(ROUTES.FAVORITES)}>
          <Link href={ROUTES.FAVORITES}>Главная</Link>
        </li>
        <li className={navLinkClassName(ROUTES.TEMPLATES)}>
          <Link href={ROUTES.TEMPLATES}> Шаблоны </Link>
        </li>
        <li className={navLinkClassName(ROUTES.HISTORY)}>
          <Link href={ROUTES.HISTORY}> История </Link>
        </li>
        <li className={navLinkClassName(ROUTES.PAY)}>
          <Link href={ROUTES.PAY}> Платежи и переводы </Link>
        </li>
      </ul>
    </nav>
  );
};
