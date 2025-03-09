"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { DialogProps } from "@radix-ui/react-dialog";

import { CreditCard, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { postTopUpAccount } from "@/utils/api/requests/post/account1c/topUp";

interface TopUpAccountModalProps extends DialogProps {
  onOpenChange: (open: boolean) => void;
  account: Account1c;
}

export const TopUpAccountModal = ({
  account,
  ...props
}: TopUpAccountModalProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 50,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await postTopUpAccount({
        params: { AccountGuid: account.AccountGuid, Amount: values.amount },
      });
      props.onOpenChange(false);
      router.refresh();
    } catch (e) {
      alert("Что-то пошло не так");
    } finally {
      form.reset();
    }
  };

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Пополнение счета</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Сумма</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1/3 -translate-y-1/3 h-4 w-4 text-muted-foreground">
                        ₽
                      </span>
                      <Input
                        type="number"
                        placeholder="50"
                        className="pl-9"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Введите сумму от 1 and ₽10000.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Номер счета:</span>
                <span className="font-mono">{account.Account}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Способ оплаты:</span>
                <span className="flex items-center">
                  <CreditCard className="h-3.5 w-3.5 mr-1.5" />
                  Кредитная карта
                </span>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                onClick={() => props.onOpenChange(false)}
                disabled={form.formState.isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Пополнение...
                  </>
                ) : (
                  "Пополнить"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
