import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Home, Menu, Clock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const CustomerLayout = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/login");
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-customer-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/customer" className="text-2xl font-bold text-customer-primary">
            FoodieHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/customer"
              className={`flex items-center space-x-2 ${
                isActive("/customer") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/customer/menu"
              className={`flex items-center space-x-2 ${
                isActive("/customer/menu") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <Menu size={20} />
              <span>Menu</span>
            </Link>
            <Link
              to="/customer/cart"
              className={`flex items-center space-x-2 ${
                isActive("/customer/cart") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            <Link
              to="/customer/orders"
              className={`flex items-center space-x-2 ${
                isActive("/customer/orders") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <Clock size={20} />
              <span>Orders</span>
            </Link>
            <Link
              to="/customer/profile"
              className={`flex items-center space-x-2 ${
                isActive("/customer/profile") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-gray-600 hover:text-customer-primary"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              <span>Logout</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around py-3">
          <Link
            to="/customer"
            className={`flex flex-col items-center ${
              isActive("/customer") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            to="/customer/menu"
            className={`flex flex-col items-center ${
              isActive("/customer/menu") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <Menu size={20} />
            <span className="text-xs mt-1">Menu</span>
          </Link>
          <Link
            to="/customer/cart"
            className={`flex flex-col items-center ${
              isActive("/customer/cart") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <ShoppingCart size={20} />
            <span className="text-xs mt-1">Cart</span>
          </Link>
          <Link
            to="/customer/orders"
            className={`flex flex-col items-center ${
              isActive("/customer/orders") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <Clock size={20} />
            <span className="text-xs mt-1">Orders</span>
          </Link>
          <Link
            to="/customer/profile"
            className={`flex flex-col items-center ${
              isActive("/customer/profile") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-gray-600"
          >
            <LogOut size={20} />
            <span className="text-xs mt-1">Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mb-16 md:mb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;