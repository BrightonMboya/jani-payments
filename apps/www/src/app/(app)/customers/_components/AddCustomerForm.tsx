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
import { Plus, Minus } from "lucide-react";

const addCustomerSchema = z.object({
  email_address: z.string(),
  name: z.string(),
  description: z.string().optional(),
  custom_data: z
    .array(z.object({ key: z.string(), value: z.string() }))
    .optional(),
});

const AddCustomerForm = () => {
  const form = useForm<z.infer<typeof addCustomerSchema>>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      email_address: "",
      name: "",
      custom_data: [],
    },
  });

  const addCustomData = () => {
    const currentData = form.getValues("custom_data") || [];
    form.setValue("custom_data", [...currentData, { key: "", value: "" }]);
  };

  const removeCustomData = (index: number) => {
    const currentData = form.getValues("custom_data") || [];
    form.setValue(
      "custom_data",
      currentData.filter((_, i) => i !== index),
    );
  };

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

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a description for this customer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="custom_data"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex items-center space-x-3">
                      <p> Custom Data (key-value pairs)</p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={addCustomData}
                        className=" h-7 w-7"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <div>
                      {field.value?.map((item, index) => (
                        <div key={index} className="flex space-x-2">
                          <Input
                            placeholder="Key"
                            {...form.register(`custom_data.${index}.key`)}
                          />
                          <Input
                            placeholder="Value"
                            {...form.register(`custom_data.${index}.value`)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeCustomData(index)}
                            className="h-10 w-10"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
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
