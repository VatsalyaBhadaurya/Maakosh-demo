"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import {
  Users,
  Wifi,
  Clock,
  TrendingUp,
  Activity,
  AlertTriangle,
  Building2,
  BarChart3,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { hospitalStats, monthlyTrends } from "@/lib/demo-data";

const admissionsData = [
  { day: "Mon", admissions: 8, discharges: 6 },
  { day: "Tue", admissions: 12, discharges: 9 },
  { day: "Wed", admissions: 10, discharges: 11 },
  { day: "Thu", admissions: 14, discharges: 8 },
  { day: "Fri", admissions: 9, discharges: 12 },
  { day: "Sat", admissions: 6, discharges: 5 },
  { day: "Sun", admissions: 5, discharges: 4 },
];

const deviceUtilization = [
  { name: "Active", value: 298, color: "#10B981" },
  { name: "Charging", value: 8, color: "#F59E0B" },
  { name: "Offline", value: 4, color: "#DC2626" },
];

const riskHeatmapData = [
  { ward: "Ward A", low: 18, moderate: 5, high: 2, critical: 0 },
  { ward: "Ward B", low: 22, moderate: 8, high: 3, critical: 1 },
  { ward: "Ward C", low: 15, moderate: 4, high: 1, critical: 0 },
  { ward: "NICU", low: 8, moderate: 12, high: 6, critical: 2 },
  { ward: "L&D", low: 12, moderate: 6, high: 2, critical: 0 },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout
      title="Admin Dashboard"
      subtitle="Hospital operations and analytics"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Today's Admissions"
          value={hospitalStats.admissionsToday}
          icon={<Users className="w-5 h-5" />}
          change="+3 from yesterday"
          changeType="positive"
          accent="teal"
        />
        <StatCard
          label="Device Utilization"
          value={`${Math.round(
            (hospitalStats.devicesOnline / hospitalStats.devicesTotal) * 100
          )}%`}
          icon={<Wifi className="w-5 h-5" />}
          change={`${hospitalStats.devicesOnline}/${hospitalStats.devicesTotal} online`}
          changeType="positive"
          accent="emerald"
        />
        <StatCard
          label="Avg Monitoring"
          value={`${hospitalStats.avgMonitoringHours}h`}
          icon={<Clock className="w-5 h-5" />}
          change="+1.2h vs last week"
          changeType="positive"
          accent="blue"
        />
        <StatCard
          label="High Risk Patients"
          value={hospitalStats.highRisk}
          icon={<AlertTriangle className="w-5 h-5" />}
          change="-2 from yesterday"
          changeType="positive"
          accent="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Admissions Chart */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-surface-muted" />
            Weekly Admissions & Discharges
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={admissionsData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#94A3B8" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="admissions" fill="#0F766E" radius={[4, 4, 0, 0]} name="Admissions" />
              <Bar dataKey="discharges" fill="#2563EB" radius={[4, 4, 0, 0]} name="Discharges" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Device Utilization */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <Wifi className="w-4 h-4 text-surface-muted" />
            Device Utilization
          </h2>
          <div className="flex items-center">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={deviceUtilization}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {deviceUtilization.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {deviceUtilization.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-surface-muted">{item.name}</span>
                  <span className="text-sm font-semibold text-surface-text">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Duration */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-surface-muted" />
          Monthly Monitoring Trends
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyTrends} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94A3B8" }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                fontSize: "12px",
              }}
            />
            <Line type="monotone" dataKey="utilization" stroke="#0F766E" strokeWidth={2} dot={false} name="Utilization %" />
            <Line type="monotone" dataKey="highRisk" stroke="#DC2626" strokeWidth={2} dot={false} name="High Risk Cases" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Risk Heatmap */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-surface-muted" />
          Ward Risk Distribution
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-border">
                <th className="text-left text-xs font-semibold text-surface-muted px-4 py-3">Ward</th>
                <th className="text-center text-xs font-semibold text-surface-muted px-4 py-3">Low Risk</th>
                <th className="text-center text-xs font-semibold text-surface-muted px-4 py-3">Moderate</th>
                <th className="text-center text-xs font-semibold text-surface-muted px-4 py-3">High</th>
                <th className="text-center text-xs font-semibold text-surface-muted px-4 py-3">Critical</th>
                <th className="text-center text-xs font-semibold text-surface-muted px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {riskHeatmapData.map((ward) => (
                <tr key={ward.ward} className="border-b border-surface-border/50">
                  <td className="px-4 py-3 text-sm font-medium text-surface-text">{ward.ward}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-semibold">{ward.low}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-700 text-sm font-semibold">{ward.moderate}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 text-orange-700 text-sm font-semibold">{ward.high}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-semibold ${ward.critical > 0 ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-400"}`}>{ward.critical}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-surface-text">
                    {ward.low + ward.moderate + ward.high + ward.critical}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
