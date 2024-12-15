const ChefOrders = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Orders Management</h1>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((order) => (
          <div
            key={order}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">Order #{order}</h3>
                <p className="text-gray-600">Customer: John Doe</p>
                <p className="text-gray-600">Time: 10 minutes ago</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                Pending
              </span>
            </div>
            <div className="border-t border-b py-4 my-4">
              <h4 className="font-medium mb-2">Items:</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>1x Pizza Margherita</span>
                  <span>$12.99</span>
                </li>
                <li className="flex justify-between">
                  <span>2x Garlic Bread</span>
                  <span>$5.98</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">Total: $18.97</span>
              <div className="space-x-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Accept
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefOrders;