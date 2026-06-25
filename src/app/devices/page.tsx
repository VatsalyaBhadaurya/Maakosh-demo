"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Wifi,
  Battery,
  Thermometer,
  Droplets,
  Activity,
  Zap,
  Signal,
  Heart,
  Monitor,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const devices = [
  {
    name: "Smart Belly Band",
    model: "MK-SBB-v2.1",
    type: "maternal" as const,
    icon: Heart,
    status: "Connected",
    battery: 82,
    firmware: "v2.1.4",
    signalQuality: 96,
    connectivity: "BLE 5.0",
    lastSync: "12 sec ago",
    sensors: [
      { name: "Skin Temperature", icon: Thermometer, status: "Active", value: "36.8°C" },
      { name: "SpO₂", icon: Droplets, status: "Active", value: "98%" },
      { name: "Activity Sensor", icon: Activity, status: "Active", value: "Normal" },
    ],
    intendedUse:
      "Continuous monitoring of maternal vital signs during the last trimester to support early identification of risk indicators associated with PPH, maternal distress, infection risk, and physiological deterioration.",
  },
  {
    name: "Neonatal Patch",
    model: "MK-NP-v1.8",
    type: "neonatal" as const,
    icon: Monitor,
    status: "Connected",
    battery: 67,
    firmware: "v1.8.2",
    signalQuality: 92,
    connectivity: "BLE 5.0",
    lastSync: "8 sec ago",
    sensors: [
      { name: "Body Temperature", icon: Thermometer, status: "Active", value: "36.9°C" },
      { name: "Heart Rate", icon: Activity, status: "Active", value: "142 bpm" },
      { name: "SpO₂", icon: Droplets, status: "Active", value: "97%" },
      { name: "Bilirubin Estimation", icon: Zap, status: "Active", value: "5.2 mg/dL" },
    ],
    intendedUse:
      "Continuous monitoring of neonatal vital signs during the first 28 days to support early identification of risk indicators associated with jaundice, hypothermia, and neonatal distress.",
  },
];

export default function DevicesPage() {
  return (
    <DashboardLayout
      title="Device Ecosystem"
      subtitle="MaaKosh wearable monitoring devices"
    >
      <div className="space-y-8">
        {devices.map((device) => (
          <div
            key={device.name}
            className="bg-white rounded-2xl shadow-card border border-surface-border/50 overflow-hidden"
          >
            <div
              className={`px-6 py-4 border-b border-surface-border ${
                device.type === "maternal"
                  ? "bg-gradient-to-r from-teal-50 to-white"
                  : "bg-gradient-to-r from-blue-50 to-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      device.type === "maternal"
                        ? "bg-teal-100 text-teal-700"
                        : "bg-blue-100 text-medical-blue"
                    }`}
                  >
                    <device.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-surface-text">
                      {device.name}
                    </h2>
                    <p className="text-xs text-surface-muted">{device.model}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-medical-emerald rounded-full animate-pulse-gentle" />
                    <span className="text-xs font-semibold text-medical-emerald">
                      {device.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-surface-bg rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Battery className="w-3.5 h-3.5 text-surface-muted" />
                    <span className="text-xs text-surface-muted">Battery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-full rounded-full ${
                          device.battery > 50
                            ? "bg-medical-emerald"
                            : device.battery > 20
                            ? "bg-medical-amber"
                            : "bg-medical-red"
                        }`}
                        style={{ width: `${device.battery}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-surface-text">
                      {device.battery}%
                    </span>
                  </div>
                </div>

                <div className="bg-surface-bg rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Wifi className="w-3.5 h-3.5 text-surface-muted" />
                    <span className="text-xs text-surface-muted">
                      Connectivity
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-surface-text">
                    {device.connectivity}
                  </p>
                </div>

                <div className="bg-surface-bg rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Signal className="w-3.5 h-3.5 text-surface-muted" />
                    <span className="text-xs text-surface-muted">
                      Signal Quality
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-surface-text">
                    {device.signalQuality}%
                  </p>
                </div>

                <div className="bg-surface-bg rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-3.5 h-3.5 text-surface-muted" />
                    <span className="text-xs text-surface-muted">Firmware</span>
                  </div>
                  <p className="text-sm font-semibold text-surface-text">
                    {device.firmware}
                  </p>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-surface-text mb-3">
                Sensors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {device.sensors.map((sensor) => (
                  <div
                    key={sensor.name}
                    className="flex items-center gap-3 bg-surface-bg rounded-xl p-3"
                  >
                    <sensor.icon
                      className={`w-4 h-4 ${
                        device.type === "maternal"
                          ? "text-teal-600"
                          : "text-medical-blue"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-surface-muted truncate">
                        {sensor.name}
                      </p>
                      <p className="text-sm font-semibold text-surface-text">
                        {sensor.value}
                      </p>
                    </div>
                    <CheckCircle className="w-3.5 h-3.5 text-medical-emerald flex-shrink-0" />
                  </div>
                ))}
              </div>

              <div className="bg-teal-50/50 rounded-xl p-4 border border-teal-100">
                <h4 className="text-xs font-semibold text-teal-700 mb-1">
                  Intended Use
                </h4>
                <p className="text-xs text-surface-muted leading-relaxed">
                  {device.intendedUse}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Data Flow */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-6">
          <h2 className="text-lg font-bold text-surface-text mb-6">
            Hospital Data Flow
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Device",
              "Gateway",
              "Hospital Server",
              "Dashboard",
              "Doctor / Nurse",
              "Clinical Decision",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-2.5 bg-teal-50 rounded-xl border border-teal-200">
                  <span className="text-sm font-medium text-teal-700">
                    {step}
                  </span>
                </div>
                {index < 5 && (
                  <svg
                    className="w-4 h-4 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-surface-muted mt-4">
            Optional: EMR Integration via HL7 FHIR
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
