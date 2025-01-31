import { Lock } from "lucide-react";

export default function OrderSummary() {
    return (
      <div className="h-fit border-[1px]  p-6 text-zinc-900 shadow-sm md:col-span-2 md:min-h-screen">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <Lock className="h-4 w-4" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-16 w-16 rounded object-cover"
            />
            <div className="ml-4">
              <h3 className="font-medium">Premium Sneakers</h3>
              <p className="text-sm ">Size: 42</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="">Subtotal</span>
              <span>$99.00</span>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="">Shipping</span>
              <span>$4.99</span>
            </div>
            <div className="mt-4 flex justify-between border-t pt-4 font-semibold">
              <span>Total</span>
              <span>$103.99</span>
            </div>
          </div>
        </div>
      </div>
    );
}