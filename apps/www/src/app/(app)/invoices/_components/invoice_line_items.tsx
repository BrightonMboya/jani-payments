import React, { useState } from "react";
import { Plus, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import  Input  from "~/components/ui/input";
import  Button  from "~/components/ui/button";

const InvoiceLineItems = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      product: "",
      price: "",
      quantity: 1,
      trial: "-",
      tax: "-",
      amount: "-",
    },
  ]);

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + (Number(item.price) * item.quantity || 0),
      0,
    );
    const tax = 0; // Calculate based on your tax logic
    return { subtotal, tax, total: subtotal + tax };
  };

  const totals = calculateTotal();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
        <div className="col-span-3">Product</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-1">Qty</div>
        <div className="col-span-2">Trial</div>
        <div className="col-span-2 flex items-center gap-1">
          Tax
          <Info className="h-4 w-4 text-gray-400" />
        </div>
        <div className="col-span-2">Amount (Exc. tax)</div>
      </div>

      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product1">Product 1</SelectItem>
                <SelectItem value="product2">Product 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Select>
              <SelectTrigger
                className={`w-full ${!item.price ? "text-gray-400" : ""}`}
              >
                <SelectValue placeholder="Select a price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">$10.00</SelectItem>
                <SelectItem value="20">$20.00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <Input
              type="number"
              value={item.quantity}
              min="1"
            //   onChange={(e) => {
            //     const newItems = [...items];
            //     newItems[items.indexOf(item)].quantity = parseInt(
            //       e.target.value,
            //     );
            //     setItems(newItems);
            //   }}
            />
          </div>
          <div className="col-span-2 flex items-center">-</div>
          <div className="col-span-2 flex items-center">-</div>
          <div className="col-span-2 flex items-center">$ -</div>
        </div>
      ))}

      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="text-blue-500 hover:text-blue-700"
          onClick={() =>
            setItems([
              ...items,
              {
                id: items.length + 1,
                product: "",
                price: "",
                quantity: 1,
                trial: "-",
                tax: "-",
                amount: "-",
              },
            ])
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add line item
        </Button>
        <Button variant="ghost" className="text-blue-500 hover:text-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add discount
        </Button>
      </div>

      <div className="space-y-2 text-right">
        <div className="flex justify-end gap-8">
          <span>Subtotal</span>
          <span>$ {totals.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-end gap-8">
          <span>Tax payable</span>
          <span>$ {totals.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-end gap-8 font-medium">
          <span>Total</span>
          <span>$ {totals.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLineItems;
