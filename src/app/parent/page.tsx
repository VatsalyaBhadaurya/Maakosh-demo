"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import AlertCard from "@/components/ui/AlertCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import VitalChart from "@/components/charts/VitalChart";
import {
  Heart,
  Thermometer,
  Droplets,
  Activity,
  Wifi,
  Bell,
  Clock,
  Pill,
  Stethoscope,
  CalendarCheck,
  Baby,
  Zap,
} from "lucide-react";
import {
  maternalPatients,
  neonatalPatients,
  alerts,
  timelineEvents,
} from "@/lib/demo-data";

export default function ParentDashboard() {
  const mother = maternalPatients[1];
  const baby = neonatalPatients[1];
  const parentAlerts = alerts.filter(
    (a) => a.patient === mother.name || a.patient === baby.name
  );

  return (
    <DashboardLayout
      title="Parent Dashboard"
      subtitle={`${mother.name} & ${baby.name}`}
    >
      {/* Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-card border border-surface-border/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-surface-muted font-medium">
              Mother Status
            </span>
            <Heart className="w-4 h-4 text-teal-600" />
          </div>
          <StatusBadge status={mother.status} />
          <p className="text-xs text-surface-muted mt-2">
            {mother.name}, {mother.age} yrs — Week {mother.gestationalWeek}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-card border border-surface-border/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-surface-muted font-medium">
              Baby Status
            </span>
            <Baby className="w-4 h-4 text-medical-blue" />
          </div>
          <StatusBadge status={baby.status} />
          <p className="text-xs text-surface-muted mt-2">
            {baby.name} — Day {baby.dayOfLife} — {baby.birthWeight} kg
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-card border border-surface-border/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-surface-muted font-medium">
              Active Devices
            </span>
            <Wifi className="w-4 h-4 text-surface-muted" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-medical-emerald rounded-full animate-pulse-gentle" />
            <span className="text-sm font-semibold text-surface-text">
              2 Connected
            </span>
          </div>
          <p className="text-xs text-surface-muted mt-2">
            Smart Belly Band + Neonatal Patch
          </p>
        </div>
      </div>

      {/* Maternal Vitals */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-teal-600" />
          Maternal Vitals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <StatCard
            label="Temperature"
            value={`${mother.temperature}°C`}
            icon={<Thermometer className="w-5 h-5" />}
            accent={mother.temperature > 37.5 ? "amber" : "teal"}
          />
          <StatCard
            label="SpO₂"
            value={`${mother.spo2}%`}
            icon={<Droplets className="w-5 h-5" />}
            accent={mother.spo2 < 95 ? "amber" : "teal"}
          />
          <StatCard
            label="Activity Trend"
            value={mother.activityTrend}
            icon={<Activity className="w-5 h-5" />}
            accent={mother.activityTrend === "Low" ? "amber" : "teal"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VitalChart
            data={mother.temperatureHistory}
            title="Temperature Trend"
            unit="°C"
            color="#0F766E"
            normalMin={36.1}
            normalMax={37.2}
          />
          <VitalChart
            data={mother.spo2History}
            title="SpO₂ Trend"
            unit="%"
            color="#2563EB"
            normalMin={95}
          />
        </div>
      </div>

      {/* Neonatal Vitals */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Baby className="w-4 h-4 text-medical-blue" />
          Neonatal Vitals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          <StatCard
            label="Temperature"
            value={`${baby.temperature}°C`}
            icon={<Thermometer className="w-5 h-5" />}
            accent={baby.temperature < 36.5 ? "amber" : "blue"}
          />
          <StatCard
            label="Heart Rate"
            value={`${baby.heartRate} bpm`}
            icon={<Activity className="w-5 h-5" />}
            accent={baby.heartRate > 160 ? "amber" : "blue"}
          />
          <StatCard
            label="SpO₂"
            value={`${baby.spo2}%`}
            icon={<Droplets className="w-5 h-5" />}
            accent={baby.spo2 < 95 ? "amber" : "blue"}
          />
          <StatCard
            label="Bilirubin"
            value={`${baby.bilirubinTrend} mg/dL`}
            icon={<Zap className="w-5 h-5" />}
            accent={baby.bilirubinTrend > 12 ? "amber" : "blue"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VitalChart
            data={baby.temperatureHistory}
            title="Temperature Trend"
            unit="°C"
            color="#2563EB"
            normalMin={36.5}
            normalMax={37.5}
          />
          <VitalChart
            data={baby.heartRateHistory}
            title="Heart Rate Trend"
            unit="bpm"
            color="#0F766E"
            normalMin={120}
            normalMax={160}
          />
          <VitalChart
            data={baby.spo2History}
            title="SpO₂ Trend"
            unit="%"
            color="#10B981"
            normalMin={95}
          />
          <VitalChart
            data={baby.bilirubinHistory}
            title="Bilirubin Trend"
            unit="mg/dL"
            color="#F59E0B"
            normalMax={12}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <Bell className="w-4 h-4 text-surface-muted" />
            Alerts
          </h2>
          <div className="space-y-3">
            {parentAlerts.length > 0 ? (
              parentAlerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))
            ) : (
              <p className="text-sm text-surface-muted py-4 text-center">
                No active alerts
              </p>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
          <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-surface-muted" />
            Timeline
          </h2>
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      event.icon === "alert"
                        ? "bg-amber-100 text-medical-amber"
                        : event.icon === "doctor"
                        ? "bg-blue-100 text-medical-blue"
                        : event.icon === "intervention"
                        ? "bg-emerald-100 text-medical-emerald"
                        : "bg-teal-100 text-teal-700"
                    }`}
                  >
                    {event.icon === "device" && (
                      <Wifi className="w-3.5 h-3.5" />
                    )}
                    {event.icon === "alert" && (
                      <Bell className="w-3.5 h-3.5" />
                    )}
                    {event.icon === "doctor" && (
                      <Stethoscope className="w-3.5 h-3.5" />
                    )}
                    {event.icon === "intervention" && (
                      <Activity className="w-3.5 h-3.5" />
                    )}
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-px h-full bg-surface-border mt-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm text-surface-text">{event.event}</p>
                  <p className="text-xs text-surface-muted mt-0.5">
                    {event.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-6 bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
        <h2 className="text-base font-semibold text-surface-text mb-4 flex items-center gap-2">
          <Bell className="w-4 h-4 text-surface-muted" />
          Reminders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
            <Pill className="w-4 h-4 text-medical-blue" />
            <div>
              <p className="text-sm font-medium text-surface-text">
                Medication Reminder
              </p>
              <p className="text-xs text-surface-muted">
                Iron supplement — 2:00 PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
            <CalendarCheck className="w-4 h-4 text-medical-emerald" />
            <div>
              <p className="text-sm font-medium text-surface-text">
                Vaccination Reminder
              </p>
              <p className="text-xs text-surface-muted">
                BCG — Scheduled Jan 22
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl border border-teal-100">
            <Stethoscope className="w-4 h-4 text-teal-700" />
            <div>
              <p className="text-sm font-medium text-surface-text">
                Follow-up Reminder
              </p>
              <p className="text-xs text-surface-muted">
                Dr. Kapoor — Jan 25
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
