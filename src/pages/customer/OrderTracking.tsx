import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

const mockOrders = [
  {
    id: "1",
    status: "pending",
    items: [
      { name: "Butter Chicken", quantity: 2 },
      { name: "Naan", quantity: 4 }
    ],
    totalAmount: 2500,
    eventDate: "2024-05-15",
    chefName: "Chef John"
  },
  {
    id: "2",
    status: "accepted",
    items: [
      { name: "Biryani", quantity: 3 },
      { name: "Raita", quantity: 3 }
    ],
    totalAmount: 3000,
    eventDate: "2024-06-20",
    chefName: "Chef Sarah"
  }
];

const OrderTracking = () => {
  const { toast } = useToast();

  const handleAcceptQuote = (orderId: string) => {
    toast({
      title: "Quote Accepted",
      description: "You have accepted the chef's quote. The chef will be notified.",
    });
  };

  const handleDeclineQuote = (orderId: string) => {
    toast({
      title: "Quote Declined",
      description: "You have declined the chef's quote.",
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Order Tracking</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                <p className="text-gray-600">Event Date: {order.eventDate}</p>
                <p className="text-gray-600">Chef: {order.chefName}</p>
              </div>
              <div className="flex items-center space-x-2">
                {order.status === 'pending' ? (
                  <span className="flex items-center text-yellow-600">
                    <Clock className="w-4 h-4 mr-1" />
                    Pending Quote
                  </span>
                ) : order.status === 'accepted' ? (
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Accepted
                  </span>
                ) : (
                  <span className="flex items-center text-red-600">
                    <XCircle className="w-4 h-4 mr-1" />
                    Declined
                  </span>
                )}
              </div>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <h4 className="font-medium mb-2">Items:</h4>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.quantity}x {item.name}
                  </li>
                ))}
              </ul>
            </div>
            
            {order.totalAmount && (
              <div className="mb-4">
                <p className="font-medium">Total Amount: ₹{order.totalAmount}</p>
              </div>
            )}
            
            {order.status === 'pending' && (
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handleDeclineQuote(order.id)}
                >
                  Decline Quote
                </Button>
                <Button
                  onClick={() => handleAcceptQuote(order.id)}
                >
                  Accept Quote
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;