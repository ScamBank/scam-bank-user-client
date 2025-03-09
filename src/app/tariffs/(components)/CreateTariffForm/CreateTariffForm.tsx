"use client";

import { z } from "zod";
import { formSchema } from "./constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FormControl,
  FormDescription,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { Loader2 } from "lucide-react";
import { postCreateTariff } from "@/utils/api/requests/post";
import { useRouter } from "next/navigation";

type FormValues = z.infer<typeof formSchema>;

export const CreateTariffForm = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      TarifName: "",
      InterestRate: 0,
      MinAmount: 0,
      MaxAmount: 0,
      MaxTerm: 0,
      LatePaymentPenalty: 0,
      GracePeriod: 0,
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const response = await postCreateTariff({
      GracePeriod: data.GracePeriod,
      LatePaymentPenalty: data.LatePaymentPenalty,
      InterestRate: data.InterestRate,
      MaxAmount: data.MaxAmount,
      MaxTerm: data.MaxTerm,
      MinAmount: data.MinAmount,
      TarifName: data.TarifName,
    });

    if (response.success) {
      form.reset();
      router.refresh();
    } else {
      alert(response.error.data.error.split(":")[1] ?? response.error.data);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-lg h-fit fixed">
      <CardHeader>
        <CardTitle>Create Credit Tariff</CardTitle>
        <CardDescription>
          Fill in the details to create a new credit tariff.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="TarifName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tariff Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tariff name" {...field} />
                  </FormControl>
                  <FormDescription>
                    The name of the credit tariff.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="InterestRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest Rate (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        placeholder="0.00"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Annual interest rate percentage.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="LatePaymentPenalty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Late Payment Penalty (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        placeholder="0.00"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Penalty percentage for late payments.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="MinAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Amount</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" placeholder="0" {...field} />
                    </FormControl>
                    <FormDescription>Minimum loan amount.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="MaxAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Amount</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" placeholder="0" {...field} />
                    </FormControl>
                    <FormDescription>Maximum loan amount.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="MaxTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Term (months)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" placeholder="0" {...field} />
                    </FormControl>
                    <FormDescription>
                      Maximum loan term in months.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="GracePeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grace Period (days)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" placeholder="0" {...field} />
                    </FormControl>
                    <FormDescription>
                      Grace period in days before penalties apply.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Создать"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
