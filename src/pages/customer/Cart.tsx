import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CustomerCart = () => {
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Order Placed",
      description: "Your order has been placed successfully!",
    });
  };

  const cartItems = [
    { name: "Vegetable Curry", quantity: 1 },
    { name: "Chicken Tikka", quantity: 2 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <Button variant="destructive" size="sm">Remove</Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Items</span>
              <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <Button 
              className="w-full"
              onClick={handleCheckout}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCart;