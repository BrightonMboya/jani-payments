"use client";
import React, { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Plus } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useToast } from "~/utils/hooks/useToast";
import { env } from "~/env";
import { useQueryClient } from "@tanstack/react-query";

const apiKeySchema = z.object({
  name: z.string(),
  description: z.string(),
});

const CreateAPIKeyForm = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient()
  const { toast } = useToast();
  const form = useForm<z.infer<typeof apiKeySchema>>({
    resolver: zodResolver(apiKeySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function createAPIKey(data: any) {
    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api-keys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create API Key");
    }

    return response.json();
  }

  const mutation = useMutation({
    mutationFn: createAPIKey,
    onSuccess: () => {
      form.reset();
      toast({
        description: "Succesfully Created the API Key",
      });
      queryClient.invalidateQueries({
        queryKey: ["fetch-api-keys"],
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: `${error.message}`,
      });
    },
  });

  function onSubmit(values: z.infer<typeof apiKeySchema>) {
    mutation.mutate({
      ...values,
      user_id: session?.user?.id,
      prefix: "prod",
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
          size="lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          Generate client-side token
        </Button>
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent className="w-[1200px]">
        <div className="space-y-6">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name of the API KEY</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the name of your API Key"
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
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the description of your API Key"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={mutation.isPending}>
                  Save
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateAPIKeyForm;
