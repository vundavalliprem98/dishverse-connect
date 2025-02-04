import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

type Chef = {
  id: string;
  email: string;
  role: string;
  created_at: string;
};

const Chefs = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    fetchChefs();
  }, []);

  const fetchChefs = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "chef");

      if (error) throw error;
      setChefs(data || []);
    } catch (error: any) {
      console.error("Error fetching chefs:", error);
      toast({
        title: "Error fetching chefs",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleAddChef = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Generate a UUID for the new profile
      const { data: uuidResult, error: uuidError } = await supabase.rpc('uuid_generate_v4');
      
      if (uuidError) throw uuidError;
      
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: uuidResult,
          email,
          role: "chef",
        });

      if (profileError) throw profileError;

      toast({
        title: "Chef profile created",
        description: "The chef's profile has been created successfully.",
      });
      setIsOpen(false);
      setEmail("");
      setFirstName("");
      setLastName("");
      fetchChefs();
    } catch (error: any) {
      console.error("Error adding chef:", error);
      toast({
        title: "Error adding chef",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chefs</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Chef
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Chef</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddChef} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Add Chef
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-2 max-w-sm">
        <Search className="w-4" />
        <Input placeholder="Search chefs..." />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chefs.map((chef) => (
              <TableRow key={chef.id}>
                <TableCell>{chef.email}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
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