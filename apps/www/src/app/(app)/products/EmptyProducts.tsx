import AddProductForm from "./_components/AddProduct";

export default function EmptyProducts() {
  return (
    <section className="flex h-full flex-col items-center justify-center text-center">
      <div>
        <h3 className="text-xl font-semibold">Create Your first Product</h3>
        <p className="w-[90%] pt-3">
          Adding products to your store is easy peasy. Create products in
          minutes and start making sales.
        </p>
        <AddProductForm />
      </div>
    </section>
  );
}
