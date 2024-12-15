import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type FoodItem = {
  id: string;
  name: string;
  dietaryPreference: string;
  courseType: string;
};

const FoodMenu = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");

  // Dummy data for demonstration
  const foodItems: FoodItem[] = [
    { id: "1", name: "Vegetable Curry", dietaryPreference: "Vegetarian", courseType: "Main Course" },
    { id: "2", name: "Chicken Tikka", dietaryPreference: "Non-Vegetarian", courseType: "Starter" },
  ];

  const handleDelete = (id: string) => {
    toast({
      title: "Food item deleted",
      description: "The food item has been successfully deleted.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Food Menu</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Food Item
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex gap-2">
          <Search className="w-4" />
          <Input
            placeholder="Search food items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={dietaryFilter} onValueChange={setDietaryFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Dietary Preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
          </SelectContent>
        </Select>
        <Select value={courseFilter} onValueChange={setCourseFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Course Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="starter">Starter</SelectItem>
            <SelectItem value="main">Main Course</SelectItem>
            <SelectItem value="dessert">Dessert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="text-xl">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.dietaryPreference} • {item.courseType}
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon" onClick={() => handleDelete(item.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;