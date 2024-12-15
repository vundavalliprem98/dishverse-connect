import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CustomerMenu = () => {
  const { toast } = useToast();

  const handleOrder = (itemName: string) => {
    toast({
      title: "Item Added",
      description: `${itemName} has been added to your cart`,
    });
  };

  const foodItems = [
    {
      name: "Vegetable Curry",
      category: "Main Course",
      dietary: "Vegetarian",
    },
    {
      name: "Chicken Tikka",
      category: "Starter",
      dietary: "Non-Vegetarian",
    },
    {
      name: "Gulab Jamun",
      category: "Dessert",
      dietary: "Vegetarian",
    },
  ];

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
          <div key={item.name} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
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
              onClick={() => handleOrder(item.name)}
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