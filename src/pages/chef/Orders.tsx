import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface OrderItem {
  name: string;
  quantity: number;
}

interface QuoteItem {
  name: string;
  quantity: number;
  price: string;
}

interface CustomerQuote {
  id: string;
  customer: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  eventDate: string;
  partyLocation: string;
  vegGuests: number;
  nonVegGuests: number;
  items: OrderItem[];
}

const ChefOrders = () => {
  const { toast } = useToast();
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [totalQuote, setTotalQuote] = useState("");

  const handleAccept = (order: CustomerQuote) => {
    setSelectedOrderId(order.id);
    setQuoteItems(order.items.map(item => ({ ...item, price: "" })));
    setIsQuoteDialogOpen(true);
  };

  const handleDecline = (orderId: string) => {
    toast({
      title: "Order Declined",
      description: "You have declined this order.",
    });
  };

  const handleQuoteSubmit = () => {
    if (quoteItems.some(item => !item.price) || !totalQuote) {
      toast({
        title: "Error",
        description: "Please enter all item prices and total quote amount",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Submitted",
      description: "Your quote has been sent to the customer.",
    });
    setIsQuoteDialogOpen(false);
    setQuoteItems([]);
    setTotalQuote("");
    setSelectedOrderId(null);
  };

  const updateItemPrice = (index: number, price: string) => {
    const newQuoteItems = [...quoteItems];
    newQuoteItems[index].price = price;
    setQuoteItems(newQuoteItems);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Orders Management</h1>
      <div className="grid grid-cols-1 gap-4">
        {[
          {
            id: "1",
            customer: "John Doe",
            fullName: "John Doe",
            phoneNumber: "+1234567890",
            address: "123 Main St",
            eventDate: "2024-04-20",
            partyLocation: "Grand Hall",
            vegGuests: 50,
            nonVegGuests: 50,
            items: [
              { name: "Paneer Tikka", quantity: 50 },
              { name: "Chicken Biryani", quantity: 50 },
            ],
          },
          {
            id: "2",
            customer: "Jane Smith",
            event: "Corporate Event",
            items: [
              { name: "Breakfast Setup", quantity: 50 },
              { name: "Lunch Boxes", quantity: 50 },
            ],
          },
        ].map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">Order #{order.id}</h3>
                <p className="text-gray-600">Customer: {order.fullName}</p>
                <p className="text-gray-600">Event Date: {order.eventDate}</p>
                <p className="text-gray-600">Location: {order.partyLocation}</p>
                <p className="text-gray-600">Guests: {order.vegGuests + order.nonVegGuests}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                Pending Quote
              </span>
            </div>
            <div className="border-t border-b py-4 my-4">
              <h4 className="font-medium mb-2">Items:</h4>
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li key={item.name}>
                    {item.quantity}x {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handleDecline(order.id)}
              >
                Decline
              </Button>
              <Button onClick={() => handleAccept(order)}>
                Accept & Quote
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Quote for Order #{selectedOrderId}</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-4">
            {quoteItems.map((item, index) => (
              <div key={item.name} className="space-y-2">
                <label className="text-sm font-medium block">
                  Price per plate for {item.name}
                </label>
                <Input
                  type="number"
                  placeholder="Enter price per plate"
                  value={item.price}
                  onChange={(e) => updateItemPrice(index, e.target.value)}
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="text-sm font-medium block">
                Total Quote Amount
              </label>
              <Input
                type="number"
                placeholder="Enter total amount"
                value={totalQuote}
                onChange={(e) => setTotalQuote(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsQuoteDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleQuoteSubmit}>Submit Quote</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChefOrders;
