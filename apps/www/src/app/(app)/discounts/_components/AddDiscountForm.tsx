"use client";
import React, { useState } from "react";
import { Percent, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const AddDiscountForm = () => {
  const [discountType, setDiscountType] = useState("percentage");
  const [status, setStatus] = useState("active");
  const [duration, setDuration] = useState("unlimited");
  const [redemptionLimit, setRedemptionLimit] = useState("unlimited");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-5">Create Discount</Button>
      </SheetTrigger>
      <SheetContent className="min-w-[60%] overflow-auto">
        <div className="min-h-screen p-8">
          <div className="">
            <div className="mb-8">
              <h1 className="mb-2 text-2xl font-bold">Create a discount</h1>
              <p className="text-gray-600">
                Set up a new discount code for your products
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Discount code
                </label>
                <div className="flex items-center space-x-4">
                  <Input
                    type="text"
                    className="flex-1 rounded-lg border p-2"
                    placeholder="e.g. SUMMER2024"
                  />
                  <Button className="rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
                    Generate
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Description (optional)
                </Label>
                <textarea
                  className="h-24 w-full rounded-lg border p-2"
                  placeholder="Enter a description for internal reference"
                />
              </div>

              {/* Status */}
              <div>
                <label className="mb-2 block text-sm font-medium">Status</label>
                <div className="flex space-x-4">
                  <button
                    className={`rounded-lg px-4 py-2 ${
                      status === "active"
                        ? "border-2 border-green-500 bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    onClick={() => setStatus("active")}
                  >
                    Active
                  </button>
                  <button
                    className={`rounded-lg px-4 py-2 ${
                      status === "inactive"
                        ? "border-2 border-red-500 bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    onClick={() => setStatus("inactive")}
                  >
                    Inactive
                  </button>
                </div>
              </div>
              {/* </CardContent> */}
              {/* </Card> */}

              {/* Discount Type Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Discount Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className={`rounded-lg border-2 p-4 ${
                        discountType === "percentage"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setDiscountType("percentage")}
                    >
                      <div className="flex items-center space-x-3">
                        <Percent className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Percentage</div>
                          <div className="text-sm text-gray-500">
                            Discount by percentage
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      className={`rounded-lg border-2 p-4 ${
                        discountType === "fixed"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setDiscountType("fixed")}
                    >
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Fixed Amount</div>
                          <div className="text-sm text-gray-500">
                            Discount by fixed amount
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      {discountType === "percentage"
                        ? "Percentage off"
                        : "Amount off"}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full rounded-lg border p-2"
                        placeholder={
                          discountType === "percentage" ? "10" : "5.99"
                        }
                      />
                      <div className="absolute right-3 top-2 text-gray-500">
                        {discountType === "percentage" ? "%" : "$"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Duration Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Duration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="unlimited"
                        checked={duration === "unlimited"}
                        onChange={() => setDuration("unlimited")}
                      />
                      <label htmlFor="unlimited">Never expires</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="limited"
                        checked={duration === "limited"}
                        onChange={() => setDuration("limited")}
                      />
                      <label htmlFor="limited">Set expiration date</label>
                    </div>
                  </div>

                  {duration === "limited" && (
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="mb-2 block text-sm font-medium">
                          Start date
                        </label>
                        <input
                          type="date"
                          className="w-full rounded-lg border p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="mb-2 block text-sm font-medium">
                          End date
                        </label>
                        <input
                          type="date"
                          className="w-full rounded-lg border p-2"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Usage Limits Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Usage Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="unlimited-redemptions"
                        checked={redemptionLimit === "unlimited"}
                        onChange={() => setRedemptionLimit("unlimited")}
                      />
                      <label htmlFor="unlimited-redemptions">
                        Unlimited redemptions
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="limited-redemptions"
                        checked={redemptionLimit === "limited"}
                        onChange={() => setRedemptionLimit("limited")}
                      />
                      <label htmlFor="limited-redemptions">
                        Limited number of redemptions
                      </label>
                    </div>
                  </div>

                  {redemptionLimit === "limited" && (
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Maximum redemptions
                      </label>
                      <input
                        type="number"
                        className="w-full rounded-lg border p-2"
                        placeholder="100"
                      />
                    </div>
                  )}

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Redemptions per customer
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-lg border p-2"
                      placeholder="1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex justify-end space-x-4">
                <button className="rounded-lg border px-4 py-2 hover:bg-gray-50">
                  Cancel
                </button>
                <Button className="rounded-lg px-4 py-2 text-white">
                  Create Discount
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddDiscountForm;
