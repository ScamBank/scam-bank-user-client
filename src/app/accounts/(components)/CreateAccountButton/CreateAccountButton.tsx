"use client";

import { Button } from "@/components/ui";
import { postUserAccountCreate } from "@/utils/api/requests/post";
import { useRouter } from "next/navigation";

export const CreateAccountButton = () => {
  const router = useRouter();

  const onCreateAccountClick = async () => {
    const response = await postUserAccountCreate({
      params: { UserGuid: "8a2e4702-fc13-11ef-81a1-005056bc249c" },
    });
    router.refresh();
  };

  return (
    <Button className="w-full" size="lg" onClick={onCreateAccountClick}>
      Новый счет
    </Button>
  );
};
