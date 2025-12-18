import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "41", orders: 40 },
  { week: "42", orders: 60 },
  { week: "43", orders: 55 },
  { week: "44", orders: 95 },
  { week: "45", orders: 70 },
  { week: "46", orders: 85 },
  { week: "47", orders: 80 },
  { week: "48", orders: 90 },
  { week: "49", orders: 65 },
  { week: "50", orders: 60 },
  { week: "51", orders: 75 },
  { week: "52", orders: 70 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-md border border-gray-200 text-sm text-gray-700">
        <p className="font-semibold">Week: {label}</p>
        <p>Orders: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function OrdersChart() {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-4 text-lg">Orders</h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="5 5" />
          <XAxis
            dataKey="week"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={{ stroke: "#D1D5DB" }}
            tickLine={false}
            label={{ value: "Calendar week", position: "bottom", offset: 10, fill: "#9CA3AF", fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={[20, 110]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#3B82F6", strokeWidth: 2 }} />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, stroke: "#3B82F6", fill: "white" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
