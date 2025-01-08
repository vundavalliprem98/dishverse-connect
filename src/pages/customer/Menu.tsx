import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const foodItems = [
  {
    id: "1",
    name: "Butter Chicken",
    category: "Main Course",
    dietary: "Non-Vegetarian",
    price: 250
  },
  {
    id: "2",
    name: "Paneer Tikka Masala",
    category: "Main Course",
    dietary: "Vegetarian",
    price: 200
  },
  {
    id: "3",
    name: "Biryani",
    category: "Main Course",
    dietary: "Non-Vegetarian",
    price: 300
  },
  {
    id: "4",
    name: "Gulab Jamun",
    category: "Dessert",
    dietary: "Vegetarian",
    price: 100
  }
];

const CustomerMenu = () => {
  const { toast } = useToast();
  const { dispatch } = useCart();

  const handleAddToCart = (item: typeof foodItems[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        quantity: 1
      }
    });
    
    toast({
      title: "Item Added",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Menu</h1>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input type="search" placeholder="Search menu..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
              <div className="flex gap-2 mt-2">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {item.category}
                </span>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  {item.dietary}
                </span>
              </div>
            </div>
            <Button 
              className="w-full"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerMenu;