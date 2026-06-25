"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import {
  Globe,
  MapPin,
  TrendingUp,
  AlertTriangle,
  Thermometer,
  Zap,
  Wifi,
  FileText,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { districtData, monthlyTrends } from "@/lib/demo-data";

export default function PublicHealthDashboard() {
  const totalHighRisk = districtData.reduce((sum, d) => sum + d.highRisk, 0);
  const totalHypothermia = districtData.reduce(
    (sum, d) => sum + d.hypothermia,
    0
  );
  const totalJaundice = districtData.reduce((sum, d) => sum + d.jaundice, 0);
  const totalDevices = districtData.reduce((sum, d) => sum + d.devices, 0);

  return (
    <DashboardLayout
      title="Public Health Dashboard"
      subtitle="Population-level maternal and neonatal analytics"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="High-Risk Pregnancies"
          value={totalHighRisk}
          icon={<AlertTriangle className="w-5 h-5" />}
          change="-12% vs last month"
          changeType="positive"
          accent="amber"
        />
        <StatCard
          label="Hypothermia Cases"
          value={totalHypothermia}
          icon={<Thermometer className="w-5 h-5" />}
          change="-8% vs last month"
          changeType="positive"
          accent="blue"
        />
        <StatCard
          label="Jaundice Incidence"
          value={totalJaundice}
          icon={<Zap className="w-5 h-5" />}
          change="-5% vs last month"
          changeType="positive"
          accent="amber"
        />
        <StatCard
          label="Devices Deployed"
          value={totalDevices}
          icon={<Wifi className="w-5 h-5" />}
          change="+15% vs last month"
          changeType="positive"
          accent="emerald"
        />
      </div>

      {/* District Analytics */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-surface-muted" />
          District-wise Analytics
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={districtData}
            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
              vertical={false}
            />
            <XAxis
              dataKey="district"
              tick={{ fontSize: 10, fill: "#94A3B8" }}
              tickLine={false}
              axisLine={false}
              angle={-20}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar
              dataKey="highRisk"
              fill="#DC2626"
              radius={[3, 3, 0, 0]}
              name="High Risk"
            />
            <Bar
              dataKey="hypothermia"
              fill="#2563EB"
              radius={[3, 3, 0, 0]}
              name="Hypothermia"
            />
            <Bar
              dataKey="jaundice"
              fill="#F59E0B"
              radius={[3, 3, 0, 0]}
              name="Jaundice"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Trends */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-surface-muted" />
            Monthly Trends
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={monthlyTrends}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E2E8F0"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "#94A3B8" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#94A3B8" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line
                type="monotone"
                dataKey="highRisk"
                stroke="#DC2626"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="High Risk"
              />
              <Line
                type="monotone"
                dataKey="hypothermia"
                stroke="#2563EB"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Hypothermia"
              />
              <Line
                type="monotone"
                dataKey="jaundice"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Jaundice"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Utilization by District */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <Wifi className="w-4 h-4 text-surface-muted" />
            Device Utilization by District
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={districtData}
              layout="vertical"
              margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E2E8F0"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 11, fill: "#94A3B8" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                type="category"
                dataKey="district"
                tick={{ fontSize: 10, fill: "#94A3B8" }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="devices"
                fill="#0F766E"
                radius={[0, 4, 4, 0]}
                name="Devices"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* State Map Placeholder */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-surface-muted" />
          Geographic Distribution
        </h2>
        <div className="bg-surface-bg rounded-xl p-12 text-center border border-dashed border-surface-border">
          <Globe className="w-12 h-12 text-teal-300 mx-auto mb-4" />
          <p className="text-sm font-medium text-surface-text">
            Interactive Map View
          </p>
          <p className="text-xs text-surface-muted mt-1">
            District-level heatmap with drill-down capabilities
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            {districtData.slice(0, 4).map((d) => (
              <div
                key={d.district}
                className="bg-white rounded-lg p-2.5 border border-surface-border"
              >
                <p className="text-xs font-medium text-surface-text truncate">
                  {d.district}
                </p>
                <p className="text-lg font-bold text-teal-700">{d.devices}</p>
                <p className="text-[10px] text-surface-muted">devices</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* District Table */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 overflow-hidden">
        <div className="px-5 py-4 border-b border-surface-border flex items-center justify-between">
          <h2 className="text-base font-semibold text-surface-text flex items-center gap-2">
            <FileText className="w-4 h-4 text-surface-muted" />
            District Report
          </h2>
          <button className="text-xs text-teal-700 font-semibold hover:underline">
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-border bg-surface-bg/50">
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  District
                </th>
                <th className="text-center text-xs font-semibold text-surface-muted px-5 py-3">
                  High Risk
                </th>
                <th className="text-center text-xs font-semibold text-surface-muted px-5 py-3">
                  Hypothermia
                </th>
                <th className="text-center text-xs font-semibold text-surface-muted px-5 py-3">
                  Jaundice
                </th>
                <th className="text-center text-xs font-semibold text-surface-muted px-5 py-3">
                  Devices
                </th>
              </tr>
            </thead>
            <tbody>
              {districtData.map((d) => (
                <tr
                  key={d.district}
                  className="border-b border-surface-border/50 hover:bg-surface-bg/50"
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-surface-text">
                    {d.district}
                  </td>
                  <td className="px-5 py-3.5 text-center text-sm text-medical-red font-semibold">
                    {d.highRisk}
                  </td>
                  <td className="px-5 py-3.5 text-center text-sm text-medical-blue font-semibold">
                    {d.hypothermia}
                  </td>
                  <td className="px-5 py-3.5 text-center text-sm text-medical-amber font-semibold">
                    {d.jaundice}
                  </td>
                  <td className="px-5 py-3.5 text-center text-sm text-surface-text font-semibold">
                    {d.devices}
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
