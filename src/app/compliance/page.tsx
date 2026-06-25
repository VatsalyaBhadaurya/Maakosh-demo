"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Shield,
  Lock,
  FileText,
  Eye,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { complianceItems } from "@/lib/demo-data";

const privacyFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "All data encrypted in transit (TLS 1.3) and at rest (AES-256).",
  },
  {
    icon: FileText,
    title: "Audit Logs",
    desc: "Comprehensive logging of all data access and modifications.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    desc: "Granular permissions based on user roles and organizational hierarchy.",
  },
  {
    icon: Eye,
    title: "Consent Management",
    desc: "Patient and guardian consent tracking with withdrawal support.",
  },
  {
    icon: Clock,
    title: "Data Retention Policies",
    desc: "Configurable retention periods aligned with regulatory requirements.",
  },
];

const consentStatuses = [
  {
    patient: "Priya Sharma",
    type: "Patient Consent",
    status: "Active",
    date: "2024-01-15",
  },
  {
    patient: "Baby Sharma",
    type: "Guardian Consent",
    status: "Active",
    date: "2024-01-16",
  },
  {
    patient: "Anita Reddy",
    type: "Patient Consent",
    status: "Active",
    date: "2024-01-12",
  },
  {
    patient: "Baby Reddy",
    type: "Guardian Consent",
    status: "Active",
    date: "2024-01-13",
  },
  {
    patient: "Lakshmi Devi",
    type: "Patient Consent",
    status: "Withdrawal Requested",
    date: "2024-01-10",
  },
];

const categoryColors: Record<string, string> = {
  Regulatory: "bg-teal-50 text-teal-700 border-teal-200",
  Quality: "bg-blue-50 text-medical-blue border-blue-200",
  Safety: "bg-amber-50 text-amber-700 border-amber-200",
  Software: "bg-purple-50 text-purple-700 border-purple-200",
  Usability: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Hardware: "bg-orange-50 text-orange-700 border-orange-200",
  Materials: "bg-pink-50 text-pink-700 border-pink-200",
  Security: "bg-red-50 text-red-700 border-red-200",
  Interoperability: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Privacy: "bg-violet-50 text-violet-700 border-violet-200",
};

export default function CompliancePage() {
  return (
    <DashboardLayout
      title="Trust & Compliance Center"
      subtitle="Regulatory readiness and data privacy"
    >
      {/* Current Status Banner */}
      <div className="bg-teal-50 rounded-2xl p-5 border border-teal-200 mb-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-teal-700">
              Current Status: Prototype & Supervised Testing
            </h3>
            <p className="text-xs text-teal-600 mt-1">
              MaaKosh is currently in the prototype and supervised testing phase.
              The regulatory pathway is under assessment. All compliance items
              listed below represent the planned roadmap — no certifications
              have been achieved.
            </p>
          </div>
        </div>
      </div>

      {/* Planned Compliance Roadmap */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4 text-teal-600" />
          Planned Compliance Roadmap
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {complianceItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3.5 bg-surface-bg rounded-xl border border-surface-border/50"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-surface-muted" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-surface-text truncate">
                  {item.name}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border ${
                      categoryColors[item.category] || "bg-gray-50 text-gray-600 border-gray-200"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-[10px] text-surface-muted italic">
                    Planned
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-surface-muted mt-4 italic text-center">
          All items represent future compliance targets. No certifications have been achieved.
        </p>
      </div>

      {/* Privacy by Design */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Lock className="w-4 h-4 text-teal-600" />
          Privacy by Design
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {privacyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-4 bg-surface-bg rounded-xl border border-surface-border/50"
            >
              <feature.icon className="w-5 h-5 text-teal-600 mb-3" />
              <h3 className="text-sm font-semibold text-surface-text mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-surface-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consent Module */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 overflow-hidden mb-6">
        <div className="px-5 py-4 border-b border-surface-border">
          <h2 className="text-base font-semibold text-surface-text flex items-center gap-2">
            <Eye className="w-4 h-4 text-teal-600" />
            Consent Management
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-border bg-surface-bg/50">
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Patient
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Type
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {consentStatuses.map((consent) => (
                <tr
                  key={`${consent.patient}-${consent.type}`}
                  className="border-b border-surface-border/50"
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-surface-text">
                    {consent.patient}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-surface-muted">
                    {consent.type}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        consent.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {consent.status === "Active" ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <AlertCircle className="w-3 h-3" />
                      )}
                      {consent.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-surface-muted">
                    {consent.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clinical Disclaimer */}
      <div className="bg-surface-bg rounded-2xl p-5 border border-surface-border">
        <h2 className="text-base font-semibold text-surface-text mb-3">
          Clinical Disclaimer
        </h2>
        <p className="text-sm text-surface-muted leading-relaxed">
          MaaKosh is intended as a clinical decision-support and monitoring
          platform. The system does not independently diagnose, prescribe, or
          replace professional medical judgment. All treatment decisions remain
          the responsibility of qualified healthcare professionals.
        </p>
      </div>
    </DashboardLayout>
  );
}
