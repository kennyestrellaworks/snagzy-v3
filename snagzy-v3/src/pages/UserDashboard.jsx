import React, { useMemo, useState } from "react";
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

// Data Source Imports
import { users } from "../data/users";
import { stores } from "../data/stores";
import { itemStatus } from "../data/itemStatus";
import { PageHeader } from "../components/PageHeader";

const COLORS = ["#06b6d4", "#f43f5e", "#10b981", "#6366f1", "#f59e0b"];

export default function UserDashboard() {
  // Chart Interval Selector State ('monthly' or 'yearly')
  const [timelineView, setTimelineView] = useState("monthly");

  // Process data using useMemo for performance optimization
  const stats = useMemo(() => {
    const totalUsers = users.length;

    // 1. Availability tracking (Online vs Offline status fields)
    const activeUsers = users.filter((u) => u.isOnline).length;
    const inactiveUsers = totalUsers - activeUsers;

    // 2. Users with Stores cross-reference tracking
    const storeOwnerIds = new Set(stores.map((s) => s.ownerId));
    const usersWithStores = users.filter((u) =>
      storeOwnerIds.has(u._id),
    ).length;

    // 3. Deactivated accounts status (True explicit flag checks)
    const deactivatedUsers = users.filter((u) => u.deactivated === true).length;

    // 4. Resolve Dynamic Profile Statuses by translating IDs to names
    const profileStatusDistribution = {};

    itemStatus.forEach((status) => {
      profileStatusDistribution[status.name] = 0;
    });

    users.forEach((user) => {
      const matchingStatus = itemStatus.find(
        (status) => status._id === user.profileStatus,
      );
      const statusLabel = matchingStatus
        ? matchingStatus.name
        : "Unknown Status";
      profileStatusDistribution[statusLabel] =
        (profileStatusDistribution[statusLabel] || 0) + 1;
    });

    const profileStatusData = Object.entries(profileStatusDistribution).map(
      ([name, value]) => ({ name, value }),
    );

    // 5. Dynamic Calculations for User Registrations based on user.createdAt
    const registrationCounts = {};

    users.forEach((user) => {
      if (!user.createdAt) return;
      const date = new Date(user.createdAt);
      if (isNaN(date.getTime())) return;

      if (timelineView === "monthly") {
        // Create an index key: "YYYY-MM"
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const key = `${year}-${month}`;

        // Human-readable format for labels: "Jan 2025"
        const label = date.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });

        if (!registrationCounts[key]) {
          registrationCounts[key] = { key, name: label, Registrations: 0 };
        }
        registrationCounts[key].Registrations += 1;
      } else {
        // Yearly key: "YYYY"
        const key = String(date.getFullYear());
        if (!registrationCounts[key]) {
          registrationCounts[key] = { key, name: key, Registrations: 0 };
        }
        registrationCounts[key].Registrations += 1;
      }
    });

    // Sort historical timeline chronologically by its underlying raw string key
    const activityTimeline = Object.values(registrationCounts).sort((a, b) =>
      a.key.localeCompare(b.key),
    );

    return {
      totalUsers,
      activeUsers,
      inactiveUsers,
      usersWithStores,
      deactivatedUsers,
      profileStatusData,
      activityTimeline,
    };
  }, [users, stores, timelineView]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-100 p-6 font-sans">
      {/* Top Section / Header */}
      <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <PageHeader defaultPage="Users Core Dashboard" type="sidebar-level" />
        <div className="text-sm font-semibold text-slate-500">
          Total Base Records:{" "}
          <span className="text-slate-800 font-bold">{stats.totalUsers}</span>
        </div>
      </div>

      {/* Numerical Indicators Dashboard Layout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Online Users
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-cyan-600">
              {stats.activeUsers}
            </span>
            <span className="text-xs bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full font-medium">
              Live Now
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Offline Profiles
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-600">
              {stats.inactiveUsers}
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
              Idle
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Registered Store Owners
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-emerald-600">
              {stats.usersWithStores}
            </span>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
              Merchants
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Deactivated Enforced
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-rose-600">
              {stats.deactivatedUsers}
            </span>
            <span className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-medium">
              Suspended
            </span>
          </div>
        </div>
      </div>

      {/* Charts Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Main Historical Registration Trends */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 lg:col-span-2">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-slate-700">
                User Onboarding Timeline
              </h3>
              <p className="text-xs text-slate-400">
                New user account creation volume computed from account
                parameters
              </p>
            </div>
            {/* Control View Toggle Selection Dropdown */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="view-select"
                className="text-xs font-semibold text-slate-500"
              >
                Group By:
              </label>
              <select
                id="view-select"
                value={timelineView}
                onChange={(e) => setTimelineView(e.target.value)}
                className="px-2.5 py-1 text-xs font-medium border border-slate-200 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-700 cursor-pointer"
              >
                <option value="monthly">Monthly Interval</option>
                <option value="yearly">Yearly Summary</option>
              </select>
            </div>
          </div>

          <div className="w-full h-72">
            {stats.activityTimeline.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center text-xs font-medium text-slate-400">
                No user creation history flags found
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                {/* Swapped to a BarChart for a cleaner user-volume breakdown view */}
                <BarChart
                  data={stats.activityTimeline}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#94a3b8" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#94a3b8" }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px", pt: 2 }} />
                  <Bar
                    dataKey="Registrations"
                    fill="#6366f1"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={50}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Dynamic Profile Status Pie Distribution */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <div className="mb-2">
            <h3 className="text-sm font-bold text-slate-700">
              Profile Status Distribution
            </h3>
            <p className="text-xs text-slate-400">
              Aggregated categorical names from master mapping criteria
            </p>
          </div>
          <div className="w-full h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.profileStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {stats.profileStatusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "11px", bottom: -10 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grid Lower Table Info Ledger Elements */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-sm font-bold text-slate-700">
              Database Breakdown Indicators Summary
            </h3>
            <p className="text-xs text-slate-400">
              System health logs parsed directly from internal state objects
            </p>
          </div>
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Metric Track Target</th>
                    <th className="py-3 px-4 text-right">
                      Computed Records Sum
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-700">
                      Live Active Sessions (Online)
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-cyan-600">
                      {stats.activeUsers}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-700">
                      Identified Store Owners
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-600">
                      {stats.usersWithStores}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-700">
                      Deactivated Flag Enforced
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-rose-600">
                      {stats.deactivatedUsers}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-xs text-slate-400 text-right mt-4 p-4 border-t border-slate-100 bg-slate-50/30">
            Data structure parsed accurately from database assets.
          </div>
        </div>
      </div>
    </div>
  );
}
