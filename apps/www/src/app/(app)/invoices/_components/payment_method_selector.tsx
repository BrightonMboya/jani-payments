"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { Volume2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";

const PaymentMethodSelector = () => {
  const [paymentMethod, setPaymentMethod] = useState("automatic");
  const [includeLink, setIncludeLink] = useState(false);

  return (
    <div className="max-w-3xl space-y-6">
      <h2 className="text-lg font-medium">
        How do you want the customer to pay?
      </h2>

      <RadioGroup
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className="grid grid-cols-2 gap-4"
      >
        <label
          className={`cursor-pointer rounded-lg border p-4 ${
            paymentMethod === "manual"
              ? "border-2 border-blue-200 bg-blue-50"
              : ""
          }`}
          onClick={() => setPaymentMethod("manual")}
        >
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="manual" className="mt-1" />
            <div className="flex space-x-3">
              <svg
                className="h-6 w-6 shrink-0 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <div>
                <p className="font-medium">Manually, via invoice</p>
                <p className="text-sm text-gray-600">
                  An invoice will be sent each time payment is due, which can be
                  paid manually by wire or checkout
                </p>
              </div>
            </div>
          </div>
        </label>

        <label
          className={`cursor-pointer rounded-lg border p-4 ${
            paymentMethod === "automatic"
              ? "border-2 border-blue-200 bg-blue-50"
              : ""
          }`}
          onClick={() => setPaymentMethod("automatic")}
        >
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="automatic" className="mt-1" />
            <div className="flex space-x-3">
              <svg
                className="h-6 w-6 shrink-0 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <div>
                <p className="font-medium">
                  Automatically, using a stored payment method
                </p>
                <p className="text-sm text-gray-600">
                  The selected payment method will be charged automatically each
                  time a payment is due
                </p>
              </div>
            </div>
          </div>
        </label>
      </RadioGroup>

      {paymentMethod === "automatic" && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium">
            Send a payment link to collect a payment method
          </h3>

          <div className="flex items-start gap-24">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-600">
                  1
                </div>
                <h4 className="font-medium">We'll generate a payment link</h4>
              </div>
              <p className="ml-11 text-gray-600">
                The link will be revealed in the next step, send it to your
                customer.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-600">
                  2
                </div>
                <h4 className="font-medium">Customer makes payment</h4>
              </div>
              <p className="ml-11 text-gray-600">
                Once payment is received via the checkout, the transaction is
                complete.
              </p>
            </div>
          </div>

          <Alert className="border-blue-100 bg-blue-50">
            <Volume2 className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-gray-700">
              The link will open a checkout via your default payment link URL,{" "}
              <button className="text-blue-500 hover:underline">
                Manage default domain
              </button>
            </AlertDescription>
          </Alert>
        </div>
      )}
      {paymentMethod !== "automatic" && (
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-medium">Customize the invoice</h3>
            <p className="text-gray-600">
              An invoice with your wire transfer details will be sent to the
              customer automatically when a payment is due.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={includeLink}
                // onCheckedChange={setIncludeLink}
              />
              <span>Include payment link</span>
              {/* <Info className="h-4 w-4 text-gray-400" /> */}
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 flex items-center space-x-2">
                <span className="font-medium">Notes</span>
                {/* <Info className="h-4 w-4 text-gray-400" /> */}
              </label>
              <textarea
                className="h-32 w-full rounded-lg border p-3"
                placeholder="Add any notes to appear on the invoice..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 flex items-center space-x-2">
                  <span className="font-medium">Purchase order</span>
                  {/* <Info className="h-4 w-4 text-gray-400" /> */}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border p-2"
                  placeholder="Enter PO number..."
                />
              </div>

              <div>
                <label className="mb-2 flex items-center space-x-2">
                  <span className="font-medium">Payment due within</span>
                  {/* <Info className="h-4 w-4 text-gray-400" /> */}
                </label>
                <Select defaultValue="14">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="14">14 Days</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodSelector;
