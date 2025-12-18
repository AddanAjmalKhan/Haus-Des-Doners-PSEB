import { Bell, MessageSquare } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Left side: Profile info */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40?img=68"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Moni Roy</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>
      </div>

      {/* Right side: Icons and language selector */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
            6
          </span>
        </div>

        {/* Flag (UK) */}
        <img
          src="https://flagcdn.com/w20/gb.png"
          alt="English"
          className="w-5 h-5 rounded-sm cursor-pointer"
        />

        {/* Language selector */}
        <select
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          {/* Add more languages here */}
        </select>

        {/* Chat */}
        <div className="relative cursor-pointer flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition">
          <MessageSquare className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600 text-sm">Chat</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
            6
          </span>
        </div>
      </div>
    </div>
  );
}
