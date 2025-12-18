import { motion } from "framer-motion";

const colors = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600",
};

export default function StatsCard({
  title,
  value,
  trend,
  color,
  negative,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{title}</p>
        <div className={`w-10 h-10 rounded-full ${colors[color]}`} />
      </div>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>

      <p
        className={`text-sm mt-1 font-medium ${
          negative ? "text-red-500" : "text-green-500"
        }`}
      >
        {trend}
      </p>
    </motion.div>
  );
}
