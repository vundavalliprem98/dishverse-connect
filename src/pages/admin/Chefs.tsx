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

type Chef = {
  id: string;
  name: string;
  email: string;
};

const Chefs = () => {
  const { toast } = useToast();

  // Dummy data for demonstration
  const chefs: Chef[] = [
    { id: "1", name: "Gordon Ramsay", email: "gordon@example.com" },
    { id: "2", name: "Jamie Oliver", email: "jamie@example.com" },
  ];

  const handleDelete = (id: string) => {
    toast({
      title: "Chef deleted",
      description: "The chef has been successfully deleted.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chefs</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Chef
        </Button>
      </div>

      <div className="flex gap-2 max-w-sm">
        <Search className="w-4" />
        <Input placeholder="Search chefs..." />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chefs.map((chef) => (
              <TableRow key={chef.id}>
                <TableCell>{chef.name}</TableCell>
                <TableCell>{chef.email}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(chef.id)}
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

export default Chefs;