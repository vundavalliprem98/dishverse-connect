const CustomerCart = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {/* Placeholder cart items */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 bg-gray-200 rounded-md"></div>
                <div>
                  <h3 className="font-semibold">Cart Item {item}</h3>
                  <p className="text-gray-600">Quantity: 1</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-customer-primary">$12.99</p>
                <button className="text-red-500 text-sm mt-2">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$25.98</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$28.97</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-customer-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCart;