"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import Input from "~/components/ui/input";
import Button from "~/components/ui/button";
import { z } from "zod";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

const addCustomerSchema = z.object({
  email_address: z.string(),
  name: z.string(),
});

const AddCustomerForm = () => {
  const form = useForm<z.infer<typeof addCustomerSchema>>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      email_address: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof addCustomerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-5">Add Customers</Button>
      </SheetTrigger>
      <SheetContent className="w-[1200px]">
        <p className="mb-2 text-lg text-gray-600">New Customer</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 pt-5"
          >
            <FormField
              control={form.control}
              name="email_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter an email address for this customer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name (required when billing manually via invoice)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a name for this customer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddCustomerForm;
