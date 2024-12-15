import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  Truck,
  ChefHat,
} from "lucide-react";

const AdminLayout = () => {
  const navItems = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
    { to: "/admin/food-menu", icon: UtensilsCrossed, label: "Food Menu" },
    { to: "/admin/customers", icon: Users, label: "Customers" },
    { to: "/admin/delivery", icon: Truck, label: "Delivery Personnel" },
    { to: "/admin/chefs", icon: ChefHat, label: "Chefs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 bottom-0 border-r bg-sidebar-background">
          <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map(({ to, icon: Icon, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 border-b bg-background z-50">
          <div className="flex items-center gap-4 p-4">
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;