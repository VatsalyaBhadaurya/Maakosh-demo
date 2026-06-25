"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Heart,
  Baby,
  ArrowDown,
  CheckCircle,
  Wifi,
  Brain,
  Bell,
  Stethoscope,
  Activity,
  Home,
  UserPlus,
  Shield,
  Monitor,
} from "lucide-react";

const maternalWorkflow = [
  { icon: UserPlus, label: "Mother Admission", color: "bg-teal-100 text-teal-700" },
  { icon: Shield, label: "Risk Stratification", color: "bg-blue-100 text-medical-blue" },
  { icon: Heart, label: "Smart Belly Band Applied", color: "bg-teal-100 text-teal-700" },
  { icon: Activity, label: "Continuous Monitoring", color: "bg-emerald-100 text-medical-emerald" },
  { icon: Wifi, label: "Data Transmission", color: "bg-blue-100 text-medical-blue" },
  { icon: Brain, label: "AI Risk Assessment", color: "bg-purple-100 text-purple-700" },
  { icon: Bell, label: "Alert Generation", color: "bg-amber-100 text-amber-700" },
  { icon: Stethoscope, label: "Doctor Review", color: "bg-teal-100 text-teal-700" },
  { icon: CheckCircle, label: "Clinical Intervention", color: "bg-emerald-100 text-medical-emerald" },
  { icon: Home, label: "Discharge / Home Monitoring", color: "bg-blue-100 text-medical-blue" },
];

const neonatalWorkflow = [
  { icon: Baby, label: "Birth", color: "bg-blue-100 text-medical-blue" },
  { icon: Shield, label: "Risk Assessment", color: "bg-amber-100 text-amber-700" },
  { icon: Monitor, label: "Patch Application", color: "bg-blue-100 text-medical-blue" },
  { icon: Activity, label: "Continuous Monitoring", color: "bg-emerald-100 text-medical-emerald" },
  { icon: Brain, label: "AI Analysis", color: "bg-purple-100 text-purple-700" },
  { icon: Bell, label: "Risk Alerts", color: "bg-amber-100 text-amber-700" },
  { icon: Stethoscope, label: "Clinical Assessment", color: "bg-teal-100 text-teal-700" },
  { icon: CheckCircle, label: "Treatment", color: "bg-emerald-100 text-medical-emerald" },
  { icon: Home, label: "Discharge / Home Monitoring", color: "bg-blue-100 text-medical-blue" },
];

const alertLevels = [
  {
    level: "Green",
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50 border-emerald-200",
    desc: "All vitals within normal range. Stable monitoring continues.",
    examples: ["All vitals stable", "Normal activity detected"],
  },
  {
    level: "Yellow",
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50 border-yellow-200",
    desc: "Mild variations detected. Enhanced monitoring recommended.",
    examples: ["Mild temperature variation", "SpO₂ trending down slightly"],
  },
  {
    level: "Orange",
    color: "bg-orange-500",
    bgColor: "bg-orange-50 border-orange-200",
    desc: "Significant trend changes. Clinical review recommended.",
    examples: ["Bilirubin trend rising", "Low SpO₂ alert", "Temperature falling"],
  },
  {
    level: "Red",
    color: "bg-red-500",
    bgColor: "bg-red-50 border-red-200",
    desc: "Critical threshold reached. Immediate clinical attention required.",
    examples: ["Hypothermia risk", "PPH risk increasing", "Maternal distress"],
  },
];

export default function WorkflowsPage() {
  return (
    <DashboardLayout
      title="Clinical Workflows"
      subtitle="Maternal and neonatal monitoring workflows"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Maternal Workflow */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-6 flex items-center gap-2">
            <Heart className="w-4 h-4 text-teal-600" />
            Maternal Clinical Workflow
          </h2>
          <div className="space-y-0">
            {maternalWorkflow.map((step, index) => (
              <div key={step.label}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color}`}
                  >
                    <step.icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-sm font-medium text-surface-text">
                    {step.label}
                  </span>
                </div>
                {index < maternalWorkflow.length - 1 && (
                  <div className="ml-[18px] my-1">
                    <ArrowDown className="w-3.5 h-3.5 text-surface-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Neonatal Workflow */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-6 flex items-center gap-2">
            <Baby className="w-4 h-4 text-medical-blue" />
            Neonatal Workflow
          </h2>
          <div className="space-y-0">
            {neonatalWorkflow.map((step, index) => (
              <div key={step.label}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color}`}
                  >
                    <step.icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-sm font-medium text-surface-text">
                    {step.label}
                  </span>
                </div>
                {index < neonatalWorkflow.length - 1 && (
                  <div className="ml-[18px] my-1">
                    <ArrowDown className="w-3.5 h-3.5 text-surface-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Engine */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-6 flex items-center gap-2">
          <Bell className="w-4 h-4 text-surface-muted" />
          Alert Engine — Severity Levels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {alertLevels.map((level) => (
            <div
              key={level.level}
              className={`rounded-xl p-4 border ${level.bgColor}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${level.color}`} />
                <h3 className="text-sm font-semibold text-surface-text">
                  {level.level}
                </h3>
              </div>
              <p className="text-xs text-surface-muted mb-3">{level.desc}</p>
              <div className="space-y-1">
                {level.examples.map((ex) => (
                  <div key={ex} className="flex items-center gap-1.5">
                    <span className="text-[10px] text-surface-muted">•</span>
                    <span className="text-xs text-surface-muted">{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hospital Data Flow */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
        <h2 className="text-base font-semibold text-surface-text mb-6 flex items-center gap-2">
          <Wifi className="w-4 h-4 text-surface-muted" />
          Hospital Setting Data Flow
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "Wearable Device", sub: "BLE 5.0" },
            { label: "Gateway", sub: "Wi-Fi / Ethernet" },
            { label: "Hospital Server", sub: "On-Premise / Cloud" },
            { label: "Dashboard", sub: "Real-time UI" },
            { label: "Doctor / Nurse", sub: "Alert & Review" },
            { label: "Clinical Decision", sub: "Intervention" },
          ].map((step, index) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="bg-teal-50 rounded-xl p-4 border border-teal-200 text-center min-w-[120px]">
                <p className="text-sm font-medium text-teal-700">
                  {step.label}
                </p>
                <p className="text-[10px] text-teal-500 mt-0.5">{step.sub}</p>
              </div>
              {index < 5 && (
                <ArrowDown className="w-4 h-4 text-teal-400 rotate-[-90deg]" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-surface-muted mt-6 italic">
          Optional: EMR Integration using HL7 FHIR
        </p>
      </div>
    </DashboardLayout>
  );
}
