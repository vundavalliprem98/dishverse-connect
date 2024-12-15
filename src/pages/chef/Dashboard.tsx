import { BarChart, Users, DollarSign, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ChefDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+5 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 need immediate attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Overview of the latest orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "#1234",
                customer: "John Doe",
                items: "2x Pizza, 1x Salad",
                status: "In Progress",
                time: "10 mins ago",
              },
              {
                id: "#1235",
                customer: "Jane Smith",
                items: "1x Burger, 1x Fries",
                status: "Pending",
                time: "15 mins ago",
              },
              {
                id: "#1236",
                customer: "Mike Johnson",
                items: "3x Tacos",
                status: "Completed",
                time: "30 mins ago",
              },
            ].map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.items}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{order.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChefDashboard;