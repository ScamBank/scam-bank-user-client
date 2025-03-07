"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants/formSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { InputMask } from "@react-input/mask";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { postCreateUser } from "@/utils/api/requests/post";
import { instance } from "@/utils/api/instance";

export const CreateUserForm = () => {
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
    await postCreateUser({
      ...values,
      birthDate: new Date(values.birthDate).toISOString(),
    } as CreateUserDto);
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Create New User</CardTitle>
        <CardDescription>
          Enter the user's information to create a new account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...userForm}>
          <form
            onSubmit={userForm.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={userForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Smirnov" {...field} />
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
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ivan" {...field} />
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
                      <FormLabel>Middle Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Petrovich" {...field} />
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
                      <FormLabel>Date of Birth</FormLabel>
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
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={userForm.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
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
              <h3 className="text-lg font-medium mb-4">Document Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={userForm.control}
                  name="snils"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SNILS</FormLabel>
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
                      <FormLabel>Passport</FormLabel>
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
                Reset
              </Button>
              <Button type="submit">
                {userForm.formState.isSubmitting
                  ? "Creating..."
                  : "Create User"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
