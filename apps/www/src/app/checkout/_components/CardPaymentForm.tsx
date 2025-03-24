"use client"
import Input from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "~/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bankPaymentSchema = z.object({
  email: z.string().email(),
  cardNumber: z.string(),
  cardHolderName: z.string(),
  cardExpiryDate: z.string(),
  cvc: z.coerce.number(),
});

export default function CardPaymentForm() {
  const form = useForm<z.infer<typeof bankPaymentSchema>>({
    resolver: zodResolver(bankPaymentSchema),
  });
  function onSubmit(values: z.infer<typeof bankPaymentSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const formatBankAccount = (value: string) => {
    // Remove non-numeric characters
    let numericValue = value.replace(/\D/g, "");

    // Limit to 20 numeric digits
    if (numericValue.length > 16) {
      numericValue = numericValue.slice(0, 16);
    }

    // Format as groups of 4 with spaces
    return numericValue.match(/.{1,4}/g)?.join(" ") || "";
  };
  return (
    <>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Card information
            </Label>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      {...field}
                      onChange={(e) =>
                        field.onChange(formatBankAccount(e.target.value))
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="mt-2 grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="cardExpiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="MM / YY" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvc"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="CVC" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="cardHolderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardholder Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Full name on card"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* <div>
            <Label className="block text-sm font-medium text-gray-700">
              Country or region
            </Label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Kenya</option>
            </select>
          </div> */}

          <button
            className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </Form>
    </>
  );
}
