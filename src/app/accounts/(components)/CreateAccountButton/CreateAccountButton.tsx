"use client";

import { Button, Form } from "@/components/ui";
import { postUserAccountCreate } from "@/utils/api/requests/post";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const CreateAccountButton = () => {
  const router = useRouter();
  const form = useForm();

  const onCreateAccountClick = async () => {
    const response = await postUserAccountCreate({
      params: { UserGuid: "8a2e4702-fc13-11ef-81a1-005056bc249c" },
    });
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCreateAccountClick)}
        className="w-full"
      >
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 size-4 animate-spin" />
          ) : (
            "Создать счет"
          )}
        </Button>
      </form>
    </Form>
  );
};
