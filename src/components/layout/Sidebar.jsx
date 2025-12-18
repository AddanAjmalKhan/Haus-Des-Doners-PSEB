import {
  Home,
  ShoppingCart,
  Package,
  Users,
  Megaphone,
  FileText,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: Home, active: true },
  { name: "Orders", icon: ShoppingCart },
  { name: "Products", icon: Package },
  { name: "Customers", icon: Users },
  { name: "Campaigns", icon: Megaphone },
  { name: "Documents", icon: FileText },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 bg-white border-r flex-col">
      <div className="px-6 py-5 font-bold text-xl text-blue-600">
        Haus Des Doners
      </div>

      <nav className="px-4 space-y-1 text-sm">
        {menu.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              ${
                item.active
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            <item.icon size={18} />
            {item.name}
          </div>
        ))}
      </nav>
    </aside>
  );
}
