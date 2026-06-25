"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import AlertCard from "@/components/ui/AlertCard";
import { StatusBadge, RiskScoreBadge } from "@/components/ui/StatusBadge";
import VitalChart from "@/components/charts/VitalChart";
import {
  Users,
  Baby,
  AlertTriangle,
  Bell,
  Activity,
  Thermometer,
  Droplets,
  Zap,
  Brain,
  FileText,
  Clock,
  ChevronRight,
  X,
} from "lucide-react";
import {
  maternalPatients,
  neonatalPatients,
  alerts,
  hospitalStats,
} from "@/lib/demo-data";

type PatientType = "maternal" | "neonatal";

export default function DoctorDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<PatientType>("maternal");

  const allPatients =
    activeTab === "maternal"
      ? maternalPatients.map((p) => ({
          id: p.id,
          name: p.name,
          age: p.age,
          device: "Smart Belly Band",
          status: p.status,
          riskScore: p.riskScore,
          lastUpdated: p.lastUpdated,
          type: "maternal" as const,
        }))
      : neonatalPatients.map((p) => ({
          id: p.id,
          name: p.name,
          age: p.dayOfLife,
          device: "Neonatal Patch",
          status: p.status,
          riskScore: p.riskScore,
          lastUpdated: p.lastUpdated,
          type: "neonatal" as const,
        }));

  const selectedMaternalPatient = maternalPatients.find(
    (p) => p.id === selectedPatient
  );
  const selectedNeonatalPatient = neonatalPatients.find(
    (p) => p.id === selectedPatient
  );

  return (
    <DashboardLayout
      title="Doctor Dashboard"
      subtitle="Hospital overview and patient monitoring"
    >
      {/* Hospital Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Total Mothers"
          value={hospitalStats.totalMothers}
          icon={<Users className="w-5 h-5" />}
          accent="teal"
        />
        <StatCard
          label="Total Newborns"
          value={hospitalStats.totalNewborns}
          icon={<Baby className="w-5 h-5" />}
          accent="blue"
        />
        <StatCard
          label="High Risk"
          value={hospitalStats.highRisk}
          icon={<AlertTriangle className="w-5 h-5" />}
          accent="amber"
        />
        <StatCard
          label="Critical Alerts"
          value={hospitalStats.criticalAlerts}
          icon={<Bell className="w-5 h-5" />}
          accent="red"
        />
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5 mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Bell className="w-4 h-4 text-medical-red" />
          Active Alerts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {alerts.slice(0, 4).map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>

      {/* Patient Monitoring Table */}
      <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 overflow-hidden mb-6">
        <div className="px-5 py-4 border-b border-surface-border flex items-center justify-between">
          <h2 className="text-base font-semibold text-surface-text">
            Live Monitoring
          </h2>
          <div className="flex gap-1 bg-surface-bg rounded-lg p-0.5">
            <button
              onClick={() => setActiveTab("maternal")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "maternal"
                  ? "bg-white text-teal-700 shadow-sm"
                  : "text-surface-muted hover:text-surface-text"
              }`}
            >
              Maternal
            </button>
            <button
              onClick={() => setActiveTab("neonatal")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "neonatal"
                  ? "bg-white text-medical-blue shadow-sm"
                  : "text-surface-muted hover:text-surface-text"
              }`}
            >
              Neonatal
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-border bg-surface-bg/50">
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Patient
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  {activeTab === "maternal" ? "Age" : "Day of Life"}
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Device
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Risk Score
                </th>
                <th className="text-left text-xs font-semibold text-surface-muted px-5 py-3">
                  Last Updated
                </th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {allPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b border-surface-border/50 hover:bg-surface-bg/50 cursor-pointer transition-colors"
                  onClick={() => setSelectedPatient(patient.id)}
                >
                  <td className="px-5 py-3.5">
                    <span className="text-sm font-medium text-surface-text">
                      {patient.name}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-surface-muted">
                    {activeTab === "maternal"
                      ? `${patient.age} yrs`
                      : `Day ${patient.age}`}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-surface-muted">
                    {patient.device}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={patient.status} />
                  </td>
                  <td className="px-5 py-3.5">
                    <RiskScoreBadge score={patient.riskScore} />
                  </td>
                  <td className="px-5 py-3.5 text-sm text-surface-muted">
                    {patient.lastUpdated}
                  </td>
                  <td className="px-5 py-3.5">
                    <ChevronRight className="w-4 h-4 text-surface-muted" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Patient Detail Panel */}
      {selectedPatient && (selectedMaternalPatient || selectedNeonatalPatient) && (
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-surface-text">
              Patient Detail —{" "}
              {selectedMaternalPatient?.name || selectedNeonatalPatient?.name}
            </h2>
            <button
              onClick={() => setSelectedPatient(null)}
              className="p-1.5 rounded-lg hover:bg-surface-bg transition-colors"
            >
              <X className="w-4 h-4 text-surface-muted" />
            </button>
          </div>

          {selectedMaternalPatient && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Age</p>
                  <p className="text-sm font-semibold">
                    {selectedMaternalPatient.age} years
                  </p>
                </div>
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">
                    Gestational Week
                  </p>
                  <p className="text-sm font-semibold">
                    Week {selectedMaternalPatient.gestationalWeek}
                  </p>
                </div>
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Admitted</p>
                  <p className="text-sm font-semibold">
                    {selectedMaternalPatient.admissionDate}
                  </p>
                </div>
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Status</p>
                  <StatusBadge status={selectedMaternalPatient.status} />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-surface-text mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-surface-muted" />
                  Medical History
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMaternalPatient.medicalHistory.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-surface-bg rounded-lg text-xs text-surface-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-surface-text mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-teal-600" />
                  AI Risk Assessment
                </h3>
                <RiskScoreBadge score={selectedMaternalPatient.riskScore} />
                {selectedMaternalPatient.riskScore > 40 && (
                  <div className="mt-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 mb-1">
                      Contributing Factors
                    </p>
                    <ul className="text-xs text-surface-muted space-y-1">
                      {selectedMaternalPatient.temperature > 37.5 && (
                        <li>Elevated temperature ({selectedMaternalPatient.temperature}°C)</li>
                      )}
                      {selectedMaternalPatient.spo2 < 96 && (
                        <li>Decreasing SpO₂ ({selectedMaternalPatient.spo2}%)</li>
                      )}
                      {selectedMaternalPatient.activityTrend === "Low" && (
                        <li>Low activity trend</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <VitalChart
                  data={selectedMaternalPatient.temperatureHistory}
                  title="Temperature"
                  unit="°C"
                  color="#0F766E"
                  normalMin={36.1}
                  normalMax={37.2}
                />
                <VitalChart
                  data={selectedMaternalPatient.spo2History}
                  title="SpO₂"
                  unit="%"
                  color="#2563EB"
                  normalMin={95}
                />
              </div>
            </>
          )}

          {selectedNeonatalPatient && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Day of Life</p>
                  <p className="text-sm font-semibold">
                    Day {selectedNeonatalPatient.dayOfLife}
                  </p>
                </div>
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Birth Weight</p>
                  <p className="text-sm font-semibold">
                    {selectedNeonatalPatient.birthWeight} kg
                  </p>
                </div>
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Mother</p>
                  <p className="text-sm font-semibold">
                    {selectedNeonatalPatient.motherName}
                  </p>
                </div>
                <div className="bg-surface-bg rounded-xl p-3">
                  <p className="text-xs text-surface-muted">Status</p>
                  <StatusBadge status={selectedNeonatalPatient.status} />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-surface-text mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-medical-blue" />
                  AI Risk Assessment
                </h3>
                <RiskScoreBadge score={selectedNeonatalPatient.riskScore} />
                {selectedNeonatalPatient.riskScore > 40 && (
                  <div className="mt-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 mb-1">
                      Contributing Factors
                    </p>
                    <ul className="text-xs text-surface-muted space-y-1">
                      {selectedNeonatalPatient.temperature < 36.5 && (
                        <li>
                          Falling temperature (
                          {selectedNeonatalPatient.temperature}°C)
                        </li>
                      )}
                      {selectedNeonatalPatient.spo2 < 95 && (
                        <li>
                          Decreasing SpO₂ ({selectedNeonatalPatient.spo2}%)
                        </li>
                      )}
                      {selectedNeonatalPatient.bilirubinTrend > 12 && (
                        <li>
                          Rising bilirubin trend (
                          {selectedNeonatalPatient.bilirubinTrend} mg/dL)
                        </li>
                      )}
                      {selectedNeonatalPatient.heartRate > 160 && (
                        <li>
                          Elevated heart rate (
                          {selectedNeonatalPatient.heartRate} bpm)
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <VitalChart
                  data={selectedNeonatalPatient.temperatureHistory}
                  title="Temperature"
                  unit="°C"
                  color="#2563EB"
                  normalMin={36.5}
                  normalMax={37.5}
                />
                <VitalChart
                  data={selectedNeonatalPatient.heartRateHistory}
                  title="Heart Rate"
                  unit="bpm"
                  color="#0F766E"
                  normalMin={120}
                  normalMax={160}
                />
                <VitalChart
                  data={selectedNeonatalPatient.spo2History}
                  title="SpO₂"
                  unit="%"
                  color="#10B981"
                  normalMin={95}
                />
                <VitalChart
                  data={selectedNeonatalPatient.bilirubinHistory}
                  title="Bilirubin Trend"
                  unit="mg/dL"
                  color="#F59E0B"
                  normalMax={12}
                />
              </div>
            </>
          )}

          {/* Clinical Notes */}
          <div className="mt-6 bg-surface-bg rounded-xl p-4">
            <h3 className="text-sm font-semibold text-surface-text mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-surface-muted" />
              Clinical Notes
            </h3>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border border-surface-border">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3 h-3 text-surface-muted" />
                  <span className="text-xs text-surface-muted">
                    Today, 10:45 AM — Dr. Kapoor
                  </span>
                </div>
                <p className="text-sm text-surface-text">
                  Patient vitals reviewed. Trend analysis shows gradual changes.
                  Continuous monitoring advised. Will reassess in 4 hours.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-surface-border">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3 h-3 text-surface-muted" />
                  <span className="text-xs text-surface-muted">
                    Today, 08:15 AM — Nurse Priya
                  </span>
                </div>
                <p className="text-sm text-surface-text">
                  Device applied successfully. Initial readings within expected
                  parameters. Patient comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
