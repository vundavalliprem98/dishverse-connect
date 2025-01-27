import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Home, Menu, Clock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CustomerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate("/");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="min-h-screen bg-customer-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-customer-primary">
            FoodieHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 ${
                isActive("/") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/menu"
              className={`flex items-center space-x-2 ${
                isActive("/menu") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <Menu size={20} />
              <span>Menu</span>
            </Link>
            <Link
              to="/cart"
              className={`flex items-center space-x-2 ${
                isActive("/cart") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            <Link
              to="/orders"
              className={`flex items-center space-x-2 ${
                isActive("/orders") ? "text-customer-primary" : "text-gray-600"
              }`}
            >
              <Clock size={20} />
              <span>Orders</span>
            </Link>
            <Link
              to="/profile"
              className={`flex items-center space-x-2 ${
                isActive("/profile") ? "text-customer-primary" : "text-gray-600"
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
            to="/"
            className={`flex flex-col items-center ${
              isActive("/") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            to="/menu"
            className={`flex flex-col items-center ${
              isActive("/menu") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <Menu size={20} />
            <span className="text-xs mt-1">Menu</span>
          </Link>
          <Link
            to="/cart"
            className={`flex flex-col items-center ${
              isActive("/cart") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <ShoppingCart size={20} />
            <span className="text-xs mt-1">Cart</span>
          </Link>
          <Link
            to="/orders"
            className={`flex flex-col items-center ${
              isActive("/orders") ? "text-customer-primary" : "text-gray-600"
            }`}
          >
            <Clock size={20} />
            <span className="text-xs mt-1">Orders</span>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center ${
              isActive("/profile") ? "text-customer-primary" : "text-gray-600"
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