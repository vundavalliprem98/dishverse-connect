import { Link, Outlet, useLocation } from "react-router-dom";
import { ChefHat, LayoutDashboard, ClipboardList, User } from "lucide-react";

const ChefLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-chef-background">
      {/* Header */}
      <header className="bg-chef-primary text-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/chef" className="text-2xl font-bold flex items-center space-x-2">
            <ChefHat size={24} />
            <span>ChefDash</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/chef"
              className={`flex items-center space-x-2 ${
                isActive("/chef") ? "text-chef-accent" : "text-gray-300"
              }`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/chef/menu"
              className={`flex items-center space-x-2 ${
                isActive("/chef/menu") ? "text-chef-accent" : "text-gray-300"
              }`}
            >
              <ClipboardList size={20} />
              <span>Menu</span>
            </Link>
            <Link
              to="/chef/orders"
              className={`flex items-center space-x-2 ${
                isActive("/chef/orders") ? "text-chef-accent" : "text-gray-300"
              }`}
            >
              <ClipboardList size={20} />
              <span>Orders</span>
            </Link>
            <Link
              to="/chef/profile"
              className={`flex items-center space-x-2 ${
                isActive("/chef/profile") ? "text-chef-accent" : "text-gray-300"
              }`}
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-chef-primary text-white border-t border-gray-700 z-50">
        <div className="flex justify-around py-3">
          <Link
            to="/chef"
            className={`flex flex-col items-center ${
              isActive("/chef") ? "text-chef-accent" : "text-gray-300"
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <Link
            to="/chef/menu"
            className={`flex flex-col items-center ${
              isActive("/chef/menu") ? "text-chef-accent" : "text-gray-300"
            }`}
          >
            <ClipboardList size={20} />
            <span className="text-xs mt-1">Menu</span>
          </Link>
          <Link
            to="/chef/orders"
            className={`flex flex-col items-center ${
              isActive("/chef/orders") ? "text-chef-accent" : "text-gray-300"
            }`}
          >
            <ClipboardList size={20} />
            <span className="text-xs mt-1">Orders</span>
          </Link>
          <Link
            to="/chef/profile"
            className={`flex flex-col items-center ${
              isActive("/chef/profile") ? "text-chef-accent" : "text-gray-300"
            }`}
          >
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mb-16 md:mb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default ChefLayout;