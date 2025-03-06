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
import { Textarea } from "~/components/ui/TextArea";
import Button from "~/components/ui/button";
import { z } from "zod";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "~/components/ui/sheet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "~/utils/hooks/useToast";
import { env } from "~/env";
import LoadingSpinner from "~/components/ui/icons/LoadingSpinner";
import { Plus, Minus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "~/components/ui/select";

const addProductSchema = z.object({
  productName: z.string().min(5, {
    message: "Product Name should be at least 5 characters",
  }),
  // taxCategory: z.string(),
  description: z.string(),
  productImageUrl: z.string().optional(),
  pricingType: z.enum(["one_time", "monthly", "yearly"]),
  priceAmount: z.number().positive(),
  currency: z.string().length(3),
  custom_data: z
    .array(z.object({ key: z.string(), value: z.string() }))
    .optional(),
});

type IAddProductSchema = z.infer<typeof addProductSchema>;

const AddProductForm = () => {
  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      productName: "",
      // taxCategory: "",
      description: "",
      productImageUrl: "",
      pricingType: "one_time",
      priceAmount: 0,
      currency: "USD",
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

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const addProducts = async (data: IAddProductSchema) => {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/products`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res.json();
      toast({
        description: `Failed to Add New Products ${error.message}`,
        variant: "destructive",
      });
    }
  };
  const mutation = useMutation({
    mutationKey: ["addProducts"],
    mutationFn: addProducts,
    onSuccess: () => {
      form.reset();
      toast({
        description: "Succesfully Added the Products",
      });
      queryClient.invalidateQueries({
        queryKey: ["getProducts"],
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });

  function onSubmit(values: z.infer<typeof addProductSchema>) {
    mutation.mutateAsync(values);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-5">Add Your Product</Button>
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent className="min-w-[50%] overflow-auto">
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-lg text-gray-600">
              Add a new product to your store.
            </p>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the name for this product"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Give your product a short and clear name. 50-60
                        characters is the recommended length for search engines.
                      </FormDescription>
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
                        <Textarea
                          placeholder="Enter the description for this product"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="productImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Image Url</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pricingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pricing Type</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select pricing type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one_time">
                              One Time Purchase
                            </SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priceAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter the price amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter currency (e.g., USD)"
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
                            className="h-7 w-7"
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

                <Button type="submit" disabled={mutation.isPending}>
                  <>
                    {mutation.isPending && <LoadingSpinner />}
                    Save
                  </>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductForm;
