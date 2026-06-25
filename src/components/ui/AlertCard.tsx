"use client";

import { AlertTriangle, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import type { Alert } from "@/lib/demo-data";

const severityConfig = {
  green: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: CheckCircle,
    iconColor: "text-emerald-600",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: AlertCircle,
    iconColor: "text-yellow-600",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: AlertTriangle,
    iconColor: "text-orange-600",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-300",
    icon: XCircle,
    iconColor: "text-red-600",
  },
};

export default function AlertCard({ alert }: { alert: Alert }) {
  const config = severityConfig[alert.severity];
  const Icon = config.icon;

  return (
    <div
      className={`flex items-start gap-3 p-3.5 rounded-xl border ${config.bg} ${config.border} animate-slide-up`}
    >
      <Icon className={`w-4.5 h-4.5 mt-0.5 flex-shrink-0 ${config.iconColor}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-surface-text">
          {alert.message}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {alert.patient && (
            <span className="text-xs text-surface-muted">{alert.patient}</span>
          )}
          <span className="text-xs text-surface-muted">{alert.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
