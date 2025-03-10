"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "@/components/ui";
import { Loader2, PhoneIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@react-input/mask";
import { postAuthorization } from "@/utils/api/requests/post/authorization";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const loginForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { PhoneNumber: "" },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const authorizationResponse = await postAuthorization({
      params: { PhoneNumber: data.PhoneNumber },
    });
    if (authorizationResponse.success) {
      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ guid: authorizationResponse.data.UserGuid }),
      });
      router.push("/accounts");
      router.refresh();
    } else {
      alert(
        authorizationResponse.error.data.error.split(":")[1] ??
          authorizationResponse.error.data.error,
      );
    }
  };

  return (
    <main className="flex items-center justify-center mx-auto p-6">
      <Card className="max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Вход</CardTitle>
          <CardDescription>
            Введите свой номер телефона для продолжения
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center w-full gap-2">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <FormField
                    control={loginForm.control}
                    name="PhoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputMask
                            component={Input}
                            mask="+7-(___)-___-__-__"
                            showMask
                            replacement={{ _: /\d/ }}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loginForm.formState.isSubmitting}
              >
                {loginForm.formState.isSubmitting ? (
                  <Loader2 className="mr-2 size-4 animate-spin" />
                ) : (
                  "Войти"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Продолжая, вы соглашаетесь с нашими Условиями предоставления услуг и
            Политикой конфиденциальности
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
