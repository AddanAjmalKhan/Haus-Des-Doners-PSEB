import { RefreshCw } from "lucide-react";

export default function Filters() {
  return (
    <div className="flex flex-wrap items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mt-4 gap-6">
      {/* Filter dropdowns */}
      {["Date", "Product", "Branch", "Supplier", "Tag"].map((item) => (
        <div key={item} className="relative w-full sm:w-auto min-w-[140px]">
          <select
            className="w-full border border-gray-300 rounded-lg px-5 py-3 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none pr-10 transition-colors duration-200 hover:border-gray-400"
            defaultValue=""
          >
            <option value="" disabled>
              {item}
            </option>
            {/* Add actual options here */}
          </select>
          {/* Custom arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ))}

      {/* Reset button with refresh icon */}
      <button className="flex items-center gap-2 text-red-500 text-sm hover:underline whitespace-nowrap ml-auto sm:ml-0 sm:mt-2">
        <RefreshCw className="w-4 h-4" />
        Reset Filter
      </button>
    </div>
  );
}
