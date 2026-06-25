"use client";

import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  accent?: "teal" | "blue" | "emerald" | "amber" | "red";
}

const accentColors = {
  teal: "bg-teal-50 text-teal-700",
  blue: "bg-blue-50 text-medical-blue",
  emerald: "bg-emerald-50 text-medical-emerald",
  amber: "bg-amber-50 text-medical-amber",
  red: "bg-red-50 text-medical-red",
};

export default function StatCard({
  label,
  value,
  icon,
  change,
  changeType = "neutral",
  accent = "teal",
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-surface-border/50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-surface-muted font-medium">{label}</p>
          <p className="text-2xl font-bold text-surface-text mt-1">{value}</p>
          {change && (
            <p
              className={`text-xs mt-1.5 font-medium ${
                changeType === "positive"
                  ? "text-medical-emerald"
                  : changeType === "negative"
                  ? "text-medical-red"
                  : "text-surface-muted"
              }`}
            >
              {change}
            </p>
          )}
        </div>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${accentColors[accent]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
