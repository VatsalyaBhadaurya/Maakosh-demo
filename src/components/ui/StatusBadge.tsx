"use client";

type StatusType = "Healthy" | "Moderate Risk" | "High Risk" | "Critical";
type SeverityType = "green" | "yellow" | "orange" | "red";

const statusStyles: Record<StatusType, string> = {
  Healthy: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Moderate Risk": "bg-amber-50 text-amber-700 border-amber-200",
  "High Risk": "bg-red-50 text-red-700 border-red-200",
  Critical: "bg-red-100 text-red-800 border-red-300",
};

const severityStyles: Record<SeverityType, string> = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  red: "bg-red-50 text-red-700 border-red-200",
};

const severityDots: Record<SeverityType, string> = {
  green: "bg-emerald-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

export function StatusBadge({ status }: { status: StatusType }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export function SeverityBadge({ severity }: { severity: SeverityType }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${severityStyles[severity]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${severityDots[severity]} ${
          severity === "red" ? "animate-pulse-gentle" : ""
        }`}
      />
      {severity.charAt(0).toUpperCase() + severity.slice(1)}
    </span>
  );
}

export function RiskScoreBadge({ score }: { score: number }) {
  const getColor = () => {
    if (score <= 25) return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (score <= 50) return "bg-amber-50 text-amber-700 border-amber-200";
    if (score <= 75) return "bg-orange-50 text-orange-700 border-orange-200";
    return "bg-red-50 text-red-700 border-red-200";
  };

  const getLabel = () => {
    if (score <= 25) return "Low";
    if (score <= 50) return "Moderate";
    if (score <= 75) return "High";
    return "Critical";
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[80px]">
        <div
          className={`h-full rounded-full transition-all duration-700 ${
            score <= 25
              ? "bg-emerald-500"
              : score <= 50
              ? "bg-amber-500"
              : score <= 75
              ? "bg-orange-500"
              : "bg-red-500"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold border ${getColor()}`}
      >
        {score} — {getLabel()}
      </span>
    </div>
  );
}
