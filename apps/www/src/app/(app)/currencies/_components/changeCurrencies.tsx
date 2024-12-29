import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Volume2 } from "lucide-react";
import { Alert, AlertDescription } from "~/components/ui/alert";


export default function ChangeCurrencies() {
    const currencies = [
      { id: "USD", symbol: "$", name: "US Dollar" },
      { id: "GBP", symbol: "£", name: "Pound Sterling" },
      { id: "EUR", symbol: "€", name: "Euro" },
      { id: "AUD", symbol: "$", name: "Australian Dollar" },
      { id: "CAD", symbol: "$", name: "Canadian Dollar" },
    ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Edit</button>
      </SheetTrigger>
      <SheetContent className="min-w-[500px]">
        <div className="max-w-2xl space-y-6 p-6">
          <Alert className="border-blue-100 bg-blue-50">
            <Volume2 className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Any changes to your currency will take effect when we have paid
              out your remaining balance.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Which currency do you want your account balance to be held in?
            </h2>
            <p className="text-gray-700">
              We recommend selecting the same currency as your bank account
              where possible.
            </p>
          </div>

          <RadioGroup defaultValue="USD" className="space-y-2">
            {currencies.map((currency) => (
              <div
                key={currency.id}
                className="flex cursor-pointer items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50"
              >
                <RadioGroupItem
                  value={currency.id}
                  id={currency.id}
                  className="text-blue-600"
                />
                <div className="flex-shrink-0 rounded-full bg-gray-100 p-2">
                  <span className="text-lg">{currency.symbol}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{currency.id}</span>
                  <span className="text-gray-600">{currency.name}</span>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </SheetContent>
    </Sheet>
  );
}
