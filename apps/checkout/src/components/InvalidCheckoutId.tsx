

// import { Button } from "@/components/ui/button";

export default function InvalidCheckout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-full bg-destructive/10 p-4">
            {/* <AlertCircle className="h-10 w-10 text-destructive" /> */}
          </div>

          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold tracking-tight">
              Checkout Failed
            </h1>
            <p className="text-muted-foreground">
              The checkout session is invalid or has expired. Please try again
              with a valid checkout ID.
            </p>
          </div>

          <div className="mt-2 flex w-full flex-col gap-3">
            {/* <Button className="w-full" asChild>
              <Link href="/checkout">Return to Checkout</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/cart">Return to Cart</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
