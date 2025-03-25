"use client";
import Input from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";
import LoadingSpinner from "~/components/ui/icons/LoadingSpinner";

const momoSchema = z.object({
  phoneNumber: z.string(),
  mno: z.string(),
});

export default function MomoPaymentForm({
  checkout_Id,
}: {
  checkout_Id: string;
}) {
  const form = useForm<z.infer<typeof momoSchema>>({
    resolver: zodResolver(momoSchema),
  });

  const { mutateAsync, isPending } = api.checkouts.chargePhoneNo.useMutation();
  function onSubmit(values: z.infer<typeof momoSchema>) {
    const res = mutateAsync({
      phoneNumber: values.phoneNumber,
      mno: values.mno,
      checkout_Id: checkout_Id,
    });
    console.log(res, "this is it");
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+254 700 000000"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="mno"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Mobile Money Provider</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      {...field}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Mpesa">M-pesa</SelectItem>
                        <SelectItem value="Airtel">Airtel</SelectItem>
                        <SelectItem value="Tigo">Tigo</SelectItem>
                        <SelectItem value="Azampesa">Azampesa</SelectItem>
                        <SelectItem value="Halopesa">Halopesa</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                );
              }}
            />
          </div>

          <button
            className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            {isPending ? <LoadingSpinner /> : "Subscribe"}
          </button>
        </form>
      </Form>
    </>
  );
}
