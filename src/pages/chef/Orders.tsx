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

const ChefOrders = () => {
  const { toast } = useToast();
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [quoteAmount, setQuoteAmount] = useState("");

  const handleAccept = (orderId: string) => {
    setSelectedOrderId(orderId);
    setIsQuoteDialogOpen(true);
  };

  const handleDecline = (orderId: string) => {
    toast({
      title: "Order Declined",
      description: "You have declined this order.",
    });
  };

  const handleQuoteSubmit = () => {
    if (!quoteAmount) {
      toast({
        title: "Error",
        description: "Please enter a quote amount",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Submitted",
      description: "Your quote has been sent to the customer.",
    });
    setIsQuoteDialogOpen(false);
    setQuoteAmount("");
    setSelectedOrderId(null);
  };

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
                Pending Quote
              </span>
            </div>
            <div className="border-t border-b py-4 my-4">
              <h4 className="font-medium mb-2">Items:</h4>
              <ul className="space-y-2">
                <li>1x Pizza Margherita</li>
                <li>2x Garlic Bread</li>
              </ul>
            </div>
            <div className="flex justify-end items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handleDecline(order.toString())}
              >
                Decline
              </Button>
              <Button onClick={() => handleAccept(order.toString())}>
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
          <div className="py-4">
            <label className="text-sm font-medium mb-2 block">
              Enter Quote Amount
            </label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={quoteAmount}
              onChange={(e) => setQuoteAmount(e.target.value)}
            />
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