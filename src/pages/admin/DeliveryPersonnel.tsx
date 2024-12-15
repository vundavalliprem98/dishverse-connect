import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

type DeliveryPerson = {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
};

const DeliveryPersonnel = () => {
  const { toast } = useToast();

  // Dummy data for demonstration
  const deliveryPersonnel: DeliveryPerson[] = [
    { id: "1", name: "Mike Johnson", email: "mike@example.com", contactNumber: "+1234567890" },
    { id: "2", name: "Sarah Wilson", email: "sarah@example.com", contactNumber: "+0987654321" },
  ];

  const handleDelete = (id: string) => {
    toast({
      title: "Delivery personnel deleted",
      description: "The delivery personnel has been successfully deleted.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Delivery Personnel</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Delivery Personnel
        </Button>
      </div>

      <div className="flex gap-2 max-w-sm">
        <Search className="w-4" />
        <Input placeholder="Search delivery personnel..." />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact Number</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveryPersonnel.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.contactNumber}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(person.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DeliveryPersonnel;