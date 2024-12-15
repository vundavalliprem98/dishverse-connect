const ChefMenu = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Menu Management</h1>
        <button className="bg-chef-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Add New Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Menu Item {item}</h3>
            <p className="text-gray-600 mb-4">
              Description of menu item {item}. This is a placeholder description.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">$12.99</span>
              <div className="space-x-2">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefMenu;