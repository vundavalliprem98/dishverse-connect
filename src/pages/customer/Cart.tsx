import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  address: string;
  eventDate: string;
  partyLocation: string;
  vegGuests: string;
  nonVegGuests: string;
}

const CustomerCart = () => {
  const { toast } = useToast();
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const form = useForm<QuoteFormData>();

  // Mock cart items - In a real app, this would come from a cart context or state management
  const cartItems = [
    { id: 1, name: "Vegetable Curry", quantity: 1 },
    { id: 2, name: "Chicken Tikka", quantity: 2 },
  ];

  const handleQuoteSubmit = (data: QuoteFormData) => {
    console.log("Quote submitted:", { items: cartItems, ...data });
    toast({
      title: "Quote Request Submitted",
      description: "Chefs will review your request and provide quotes soon.",
    });
    setIsQuoteFormOpen(false);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
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
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Proceed to Quote Details
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleQuoteSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your full name" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your phone number" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your address" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="partyLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Party Location</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter party location" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vegGuests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vegetarian Guests</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="Number of vegetarian guests" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nonVegGuests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Non-Vegetarian Guests</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="Number of non-vegetarian guests" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Quote Request</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerCart;