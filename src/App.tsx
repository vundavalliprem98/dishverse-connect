import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CustomerLayout from "./layouts/CustomerLayout";
import ChefLayout from "./layouts/ChefLayout";
import CustomerHome from "./pages/customer/Home";
import CustomerMenu from "./pages/customer/Menu";
import CustomerCart from "./pages/customer/Cart";
import CustomerProfile from "./pages/customer/Profile";
import ChefDashboard from "./pages/chef/Dashboard";
import ChefMenu from "./pages/chef/Menu";
import ChefOrders from "./pages/chef/Orders";
import ChefProfile from "./pages/chef/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Customer Routes */}
          <Route path="/customer" element={<CustomerLayout />}>
            <Route index element={<CustomerHome />} />
            <Route path="menu" element={<CustomerMenu />} />
            <Route path="cart" element={<CustomerCart />} />
            <Route path="profile" element={<CustomerProfile />} />
          </Route>

          {/* Chef Routes */}
          <Route path="/chef" element={<ChefLayout />}>
            <Route index element={<ChefDashboard />} />
            <Route path="menu" element={<ChefMenu />} />
            <Route path="orders" element={<ChefOrders />} />
            <Route path="profile" element={<ChefProfile />} />
          </Route>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/customer" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;