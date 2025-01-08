const ChefMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce",
      price: 599
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese in spiced gravy",
      price: 499
    },
    {
      id: 3,
      name: "Biryani",
      description: "Fragrant rice dish with aromatic spices",
      price: 699
    },
    {
      id: 4,
      name: "Gulab Jamun",
      description: "Sweet milk dumplings in sugar syrup",
      price: 299
    },
    {
      id: 5,
      name: "Dal Makhani",
      description: "Creamy black lentils cooked overnight",
      price: 399
    },
    {
      id: 6,
      name: "Naan Bread",
      description: "Freshly baked Indian bread",
      price: 99
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Menu Management</h1>
        <button className="bg-chef-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Add New Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">₹{item.price}</span>
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