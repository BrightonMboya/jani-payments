export default function ProductInfo({productInfo}: any) {
    const sampleData = productInfo
    return (
      <>
        <div className="bg-gray-900 p-8 text-white lg:w-[50%]">
          <div className="mb-8">
            <img
              src={sampleData.logoUrl}
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Subscribe to {sampleData.productName}
            </h2>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">US${sampleData.price}</span>
              <span className="ml-2 text-gray-400">per year</span>
            </div>
            <p className="text-gray-400">
              US${sampleData.monthlyPrice} / month billed annually
            </p>
            <p className="text-gray-400">{sampleData.description}</p>
          </div>
        </div>
      </>
    );
}