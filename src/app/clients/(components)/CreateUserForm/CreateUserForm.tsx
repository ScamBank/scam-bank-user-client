"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants/formSchema";

import { InputMask } from "@react-input/mask";

import { postCreateUser } from "@/utils/api/requests/post";
import {
  Button,
  Card,
  Form,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
} from "@/components/ui";
import { useRouter } from "next/navigation";

export const CreateUserForm = () => {
  const router = useRouter();
  const userForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthDate: "",
      email: "",
      firstName: "",
      lastName: "",
      middleName: "",
      passport: "",
      phoneNumber: "",
      snils: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await postCreateUser({
      ...values,
      birthDate: new Date(values.birthDate).toISOString(),
    } as CreateUserDto);

    if (!response.success) {
      alert(response.data.message);
      return;
    }
    router.refresh();
  }

  return (
    <Card className="w-full max-w-lg h-fit fixed">
      <CardHeader>
        <CardTitle>Создание нового клиента</CardTitle>
        <CardDescription>
          Введите данные пользователя, чтобы создать новую учетную запись.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...userForm}>
          <form
            onSubmit={userForm.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-medium mb-4">Личная информация</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={userForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Фамилия</FormLabel>
                      <FormControl>
                        <Input placeholder="Смирнов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userForm.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Отчество</FormLabel>
                      <FormControl>
                        <Input placeholder="Петрович" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userForm.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Дата рождения</FormLabel>
                      <FormControl>
                        <InputMask
                          component={Input}
                          mask="__.__.____"
                          showMask
                          replacement={{ _: /\d/ }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">
                Контактная информация
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={userForm.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Номер телефона</FormLabel>
                      <FormControl>
                        <InputMask
                          component={Input}
                          mask="+7-(___)-___-__-__"
                          showMask
                          replacement={{ _: /\d/ }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="user@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">
                Информация о документах
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={userForm.control}
                  name="snils"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>СНИЛС</FormLabel>
                      <FormControl>
                        <InputMask
                          component={Input}
                          mask="___-___-___ __"
                          showMask
                          replacement={{ _: /\d/ }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userForm.control}
                  name="passport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Паспорт</FormLabel>
                      <FormControl>
                        <InputMask
                          component={Input}
                          mask="____ ______"
                          showMask
                          replacement={{ _: /\d/ }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => userForm.reset()}
              >
                Сбросить
              </Button>
              <Button type="submit">
                {userForm.formState.isSubmitting ? "Создание..." : "Создать"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
