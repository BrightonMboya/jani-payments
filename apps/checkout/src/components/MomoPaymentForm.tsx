import Input from "./ui/Input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const momoSchema = z.object({
  phoneNumber: z.string(),
});

interface IProps {
  onSubmit: () => void;
}

export default function MomoPaymentForm({ onSubmit }: IProps) {
  const form = useForm<z.infer<typeof momoSchema>>({
    resolver: zodResolver(momoSchema),
  });

  // function onSubmit(values: z.infer<typeof momoSchema>) {
  //   console.log(values);
  // }

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
            <Label className="block text-sm font-medium text-gray-700">
              Mobile Money Provider
            </Label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Airtel</option>
              <option>Tigo</option>
              <option>Halopesa</option>
              <option value="">Azampesa</option>
              <option value="">Mpesa</option>
            </select>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit">
            Subscribe
          </button>
        </form>
      </Form>
    </>
  );
}
