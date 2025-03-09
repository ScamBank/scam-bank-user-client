"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const onLogoutClick = async () => {
    await fetch(`http://localhost:1337/api/logout`, {
      method: "POST",
    });
    router.push("/login");
  };

  return (
    <li onClick={onLogoutClick}>
      <LogOutIcon />
    </li>
  );
};
