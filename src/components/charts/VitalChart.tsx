"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { VitalReading } from "@/lib/demo-data";

interface VitalChartProps {
  data: VitalReading[];
  title: string;
  unit: string;
  color: string;
  normalMin?: number;
  normalMax?: number;
  height?: number;
}

export default function VitalChart({
  data,
  title,
  unit,
  color,
  normalMin,
  normalMax,
  height = 200,
}: VitalChartProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-card border border-surface-border/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-surface-text">{title}</h3>
        <span className="text-xs text-surface-muted">{unit}</span>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E8F0"
            vertical={false}
          />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 10, fill: "#94A3B8" }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#94A3B8" }}
            tickLine={false}
            axisLine={false}
            domain={["auto", "auto"]}
          />
          <Tooltip
            contentStyle={{
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              fontSize: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            formatter={(value) => [`${value} ${unit}`, title]}
          />
          {normalMin !== undefined && (
            <ReferenceLine
              y={normalMin}
              stroke="#10B981"
              strokeDasharray="4 4"
              strokeWidth={1}
            />
          )}
          {normalMax !== undefined && (
            <ReferenceLine
              y={normalMax}
              stroke="#10B981"
              strokeDasharray="4 4"
              strokeWidth={1}
            />
          )}
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: color, stroke: "white", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
