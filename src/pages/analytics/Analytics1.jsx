import { PageHeader } from "../../components/PageHeader";
import { useData } from "../../context/DataContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#6366f1", "#10b981", "#f59e42", "#f43f5e"];

export const Analytics1 = () => {
  const { getAllOrders } = useData();
  const orders = getAllOrders();

  // Only delivered or completed orders
  const deliveredOrders = orders.filter(
    (order) =>
      order.currentStatus?.slug === "delivered" ||
      order.currentStatus?.slug === "completed",
  );

  // Sales by month
  const salesByMonth = {};
  deliveredOrders.forEach((order) => {
    const date = new Date(order.currentStatus?.timestamp || order.updatedAt);
    const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    salesByMonth[month] =
      (salesByMonth[month] || 0) + (order.summary?.orderTotalPrice || 0);
  });
  const salesByMonthData = Object.entries(salesByMonth).map(
    ([month, total]) => ({ month, total }),
  );

  // Sales by store
  const salesByStore = {};
  deliveredOrders.forEach((order) => {
    order.orderedItems.forEach((item) => {
      const store = item.variant?.storeInfo?.storeName || "Unknown";
      salesByStore[store] =
        (salesByStore[store] || 0) + (item.variant?.subTotal || 0);
    });
  });
  const salesByStoreData = Object.entries(salesByStore).map(
    ([store, total]) => ({ store, total }),
  );

  // Pie chart: delivered vs completed
  const statusCounts = deliveredOrders.reduce(
    (acc, order) => {
      const slug = order.currentStatus?.slug;
      if (slug === "delivered" || slug === "completed") {
        acc[slug] = (acc[slug] || 0) + 1;
      }
      return acc;
    },
    { delivered: 0, completed: 0 },
  );
  const statusPieData = [
    { name: "Delivered", value: statusCounts.delivered },
    { name: "Completed", value: statusCounts.completed },
  ];

  return (
    <div
      style={{
        padding: "32px 0 0 0",
        maxWidth: 900,
        margin: "0 auto",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <PageHeader defaultPage="Analytics" type="sidebar-level" />
      <h1
        style={{
          fontWeight: 600,
          fontSize: 28,
          margin: "16px 0 32px 0",
          color: "#22223b",
          letterSpacing: "-0.5px",
        }}
      >
        Sales Analytics
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.03)",
            padding: 28,
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 500,
              fontSize: 18,
              marginBottom: 18,
              color: "#374151",
            }}
          >
            Sales by Month
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={salesByMonthData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar
                dataKey="total"
                fill={COLORS[0]}
                radius={[6, 6, 0, 0]}
                name="Total Sales"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.03)",
            padding: 28,
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 500,
              fontSize: 18,
              marginBottom: 18,
              color: "#374151",
            }}
          >
            Sales by Store
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={salesByStoreData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="store"
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar
                dataKey="total"
                fill={COLORS[1]}
                radius={[0, 6, 6, 0]}
                name="Total Sales"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.03)",
            padding: 28,
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 500,
              fontSize: 18,
              marginBottom: 18,
              color: "#374151",
            }}
          >
            Delivered vs Completed Orders
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={statusPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill={COLORS[2]}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {statusPieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
