import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CustomerHome = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Food</h1>
          <div className="w-full max-w-md relative">
            <Input
              type="search"
              placeholder="Search for dishes..."
              className="w-full pl-10 bg-white text-black"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Italian", "Japanese", "Mexican", "Indian"].map((category) => (
            <div
              key={category}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-center">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Margherita Pizza",
              price: "$12.99",
              image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80",
            },
            {
              name: "Sushi Roll",
              price: "$15.99",
              image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
            },
            {
              name: "Burger Deluxe",
              price: "$10.99",
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
            },
          ].map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-customer-primary font-bold mt-2">{dish.price}</p>
                <button className="w-full mt-3 bg-customer-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerHome;