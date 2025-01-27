import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { useState } from "react";

// Layouts
import CustomerLayout from "./layouts/CustomerLayout";
import ChefLayout from "./layouts/ChefLayout";
import AdminLayout from "./layouts/AdminLayout";

// Customer Pages
import CustomerHome from "./pages/customer/Home";
import CustomerMenu from "./pages/customer/Menu";
import CustomerCart from "./pages/customer/Cart";
import CustomerProfile from "./pages/customer/Profile";
import OrderTracking from "./pages/customer/OrderTracking";

// Chef Pages
import ChefDashboard from "./pages/chef/Dashboard";
import ChefMenu from "./pages/chef/Menu";
import ChefOrders from "./pages/chef/Orders";
import ChefProfile from "./pages/chef/Profile";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminFoodMenu from "./pages/admin/FoodMenu";
import AdminCustomers from "./pages/admin/Customers";
import AdminDeliveryPersonnel from "./pages/admin/DeliveryPersonnel";
import AdminChefs from "./pages/admin/Chefs";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={<CustomerLayout />}>
                <Route index element={<CustomerHome />} />
                <Route path="menu" element={<CustomerMenu />} />
                <Route path="cart" element={<CustomerCart />} />
                <Route path="profile" element={<CustomerProfile />} />
                <Route path="orders" element={<OrderTracking />} />
              </Route>

              {/* Chef Routes */}
              <Route path="/chef" element={<ChefLayout />}>
                <Route index element={<ChefDashboard />} />
                <Route path="menu" element={<ChefMenu />} />
                <Route path="orders" element={<ChefOrders />} />
                <Route path="profile" element={<ChefProfile />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="food-menu" element={<AdminFoodMenu />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="delivery" element={<AdminDeliveryPersonnel />} />
                <Route path="chefs" element={<AdminChefs />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;