"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { StatusBadge, RiskScoreBadge } from "@/components/ui/StatusBadge";
import AlertCard from "@/components/ui/AlertCard";
import StatCard from "@/components/ui/StatCard";
import {
  Users,
  Bell,
  Wifi,
  Battery,
  CheckCircle,
  Clock,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import {
  maternalPatients,
  neonatalPatients,
  alerts,
} from "@/lib/demo-data";

const assignedMothers = maternalPatients.slice(0, 4);
const assignedBabies = neonatalPatients.slice(0, 4);

const patchReplacements = [
  { patient: "Baby Reddy", device: "Neonatal Patch", nextChange: "2 hours", status: "upcoming" },
  { patient: "Baby Devi", device: "Neonatal Patch", nextChange: "4 hours", status: "ok" },
  { patient: "Baby Patel", device: "Neonatal Patch", nextChange: "30 min", status: "urgent" },
];

export default function NurseDashboard() {
  const pendingAlerts = alerts.filter(
    (a) => a.severity === "red" || a.severity === "orange"
  );

  return (
    <DashboardLayout
      title="Nurse Dashboard"
      subtitle="Ward management and device status"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Assigned Patients"
          value={assignedMothers.length + assignedBabies.length}
          icon={<Users className="w-5 h-5" />}
          accent="teal"
        />
        <StatCard
          label="Pending Alerts"
          value={pendingAlerts.length}
          icon={<Bell className="w-5 h-5" />}
          accent="red"
        />
        <StatCard
          label="Devices Online"
          value="7/8"
          icon={<Wifi className="w-5 h-5" />}
          accent="emerald"
        />
        <StatCard
          label="Patches Due"
          value={patchReplacements.filter((p) => p.status === "urgent").length}
          icon={<RefreshCw className="w-5 h-5" />}
          accent="amber"
        />
      </div>

      {/* Pending Alerts */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-medical-red" />
          Pending Alerts
        </h2>
        <div className="space-y-3">
          {pendingAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Assigned Patients */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 overflow-hidden">
          <div className="px-5 py-4 border-b border-surface-border">
            <h2 className="text-base font-semibold text-surface-text">
              Assigned Patients — Maternal
            </h2>
          </div>
          <div className="divide-y divide-surface-border/50">
            {assignedMothers.map((patient) => (
              <div
                key={patient.id}
                className="px-5 py-3.5 flex items-center justify-between hover:bg-surface-bg/50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-surface-text">
                    {patient.name}
                  </p>
                  <p className="text-xs text-surface-muted">
                    {patient.age} yrs — Week {patient.gestationalWeek}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={patient.status} />
                  <div
                    className={`w-2 h-2 rounded-full ${
                      patient.deviceConnected
                        ? "bg-medical-emerald"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 overflow-hidden">
          <div className="px-5 py-4 border-b border-surface-border">
            <h2 className="text-base font-semibold text-surface-text">
              Assigned Patients — Neonatal
            </h2>
          </div>
          <div className="divide-y divide-surface-border/50">
            {assignedBabies.map((patient) => (
              <div
                key={patient.id}
                className="px-5 py-3.5 flex items-center justify-between hover:bg-surface-bg/50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-surface-text">
                    {patient.name}
                  </p>
                  <p className="text-xs text-surface-muted">
                    Day {patient.dayOfLife} — {patient.birthWeight} kg
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={patient.status} />
                  <div
                    className={`w-2 h-2 rounded-full ${
                      patient.deviceConnected
                        ? "bg-medical-emerald"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Status & Patch Replacement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <Battery className="w-4 h-4 text-surface-muted" />
            Device Battery Status
          </h2>
          <div className="space-y-3">
            {[
              { device: "SBB — Priya Sharma", battery: 82 },
              { device: "SBB — Anita Reddy", battery: 45 },
              { device: "SBB — Lakshmi Devi", battery: 71 },
              { device: "NP — Baby Sharma", battery: 88 },
              { device: "NP — Baby Reddy", battery: 34 },
              { device: "NP — Baby Devi", battery: 56 },
            ].map((item) => (
              <div key={item.device} className="flex items-center gap-3">
                <span className="text-xs text-surface-muted w-40 truncate">
                  {item.device}
                </span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.battery > 50
                        ? "bg-medical-emerald"
                        : item.battery > 20
                        ? "bg-medical-amber"
                        : "bg-medical-red"
                    }`}
                    style={{ width: `${item.battery}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-surface-text w-8 text-right">
                  {item.battery}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-surface-muted" />
            Patch Replacement Schedule
          </h2>
          <div className="space-y-3">
            {patchReplacements.map((item) => (
              <div
                key={item.patient}
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  item.status === "urgent"
                    ? "bg-amber-50 border-amber-200"
                    : item.status === "upcoming"
                    ? "bg-blue-50 border-blue-200"
                    : "bg-surface-bg border-surface-border"
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-surface-text">
                    {item.patient}
                  </p>
                  <p className="text-xs text-surface-muted">{item.device}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-surface-muted" />
                  <span
                    className={`text-xs font-semibold ${
                      item.status === "urgent"
                        ? "text-medical-amber"
                        : "text-surface-muted"
                    }`}
                  >
                    {item.nextChange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
