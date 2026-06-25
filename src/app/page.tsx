"use client";

import Link from "next/link";
import {
  Monitor,
  Heart,
  Activity,
  Shield,
  Brain,
  Wifi,
  ArrowRight,
  ChevronRight,
  Thermometer,
  Droplets,
  Zap,
  Users,
  Building2,
  Globe,
  CheckCircle,
  TrendingDown,
  AlertTriangle,
  FileCheck,
  ClipboardList,
} from "lucide-react";
import { teamMembers } from "@/lib/demo-data";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-100/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse-gentle" />
                AI-Powered Monitoring Ecosystem
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-text tracking-tight leading-tight">
              Continuous Maternal &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">
                Neonatal Monitoring
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-muted max-w-2xl mx-auto leading-relaxed">
              AI-powered wearable ecosystem for early risk awareness. Shifting
              maternal and neonatal care from episodic observation toward
              continuous monitoring and early intervention.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-3.5 bg-teal-700 text-white rounded-xl font-semibold text-sm hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/20"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/doctor"
                className="group flex items-center gap-2 px-8 py-3.5 bg-white text-surface-text rounded-xl font-semibold text-sm border border-surface-border hover:border-teal-300 hover:bg-teal-50/50 transition-all"
              >
                Explore Platform
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Live Stats Bar */}
          <div className="mt-16 max-w-4xl mx-auto animate-slide-up">
            <div className="bg-white rounded-2xl shadow-clinical border border-surface-border/50 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Births Monitored", value: "12,400+", icon: Heart },
                { label: "Early Detections", value: "340+", icon: AlertTriangle },
                { label: "Response Time", value: "<4 min", icon: TrendingDown },
                { label: "Uptime", value: "99.7%", icon: Activity },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-teal-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-surface-text">{stat.value}</p>
                  <p className="text-xs text-surface-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-medical-red uppercase tracking-widest">
              The Problem
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">
              The Early Detection Gap
            </h2>
            <p className="mt-4 text-surface-muted leading-relaxed">
              Many maternal and neonatal complications occur between routine observations and are detected too late for optimal intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-lg font-bold text-surface-text mb-4">Global Impact</h3>
              <div className="space-y-4">
                {[
                  { label: "Annual births", value: "~135 million" },
                  { label: "Maternal deaths", value: "~260,000" },
                  { label: "Neonatal deaths", value: "~2.3 million" },
                  { label: "Under-5 mortality (neonatal)", value: "~47%" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-sm text-surface-muted">{stat.label}</span>
                    <span className="text-sm font-bold text-surface-text">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-lg font-bold text-surface-text mb-4">India Impact</h3>
              <div className="space-y-4">
                {[
                  { label: "Annual births", value: "~24 million" },
                  { label: "Maternal deaths", value: "~20,000" },
                  { label: "Neonatal deaths", value: "~500,000+" },
                  { label: "Share of global neonatal deaths", value: "~25%" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-sm text-surface-muted">{stat.label}</span>
                    <span className="text-sm font-bold text-surface-text">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-surface-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">Our Solution</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">Two Devices. One Ecosystem.</h2>
            <p className="mt-4 text-surface-muted leading-relaxed">
              Purpose-built wearable devices continuously monitor vital signs and feed AI-powered risk assessment in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-surface-border/50 hover:shadow-clinical transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-surface-text mb-2">Smart Belly Band</h3>
              <p className="text-sm text-surface-muted mb-6">Continuous monitoring for mothers during the last trimester.</p>
              <div className="space-y-3">
                {[
                  { icon: Thermometer, label: "Skin Temperature" },
                  { icon: Droplets, label: "SpO₂ Monitoring" },
                  { icon: Activity, label: "Activity Trends" },
                ].map((sensor) => (
                  <div key={sensor.label} className="flex items-center gap-3 text-sm text-surface-text">
                    <sensor.icon className="w-4 h-4 text-teal-600" />
                    {sensor.label}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border">
                <p className="text-xs text-surface-muted">
                  <span className="font-semibold">Detects risk indicators for:</span> PPH, Maternal Distress, Infection Risk, Physiological Deterioration
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card border border-surface-border/50 hover:shadow-clinical transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold text-surface-text mb-2">Neonatal Patch</h3>
              <p className="text-sm text-surface-muted mb-6">Continuous monitoring for newborns during the first 28 days.</p>
              <div className="space-y-3">
                {[
                  { icon: Thermometer, label: "Body Temperature" },
                  { icon: Activity, label: "Heart Rate" },
                  { icon: Droplets, label: "Oxygen Saturation" },
                  { icon: Zap, label: "Bilirubin Trend Estimation" },
                ].map((sensor) => (
                  <div key={sensor.label} className="flex items-center gap-3 text-sm text-surface-text">
                    <sensor.icon className="w-4 h-4 text-medical-blue" />
                    {sensor.label}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border">
                <p className="text-xs text-surface-muted">
                  <span className="font-semibold">Detects risk indicators for:</span> Jaundice, Hypothermia, Neonatal Distress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">Workflow</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">Clinical Workflow Integration</h2>
            <p className="mt-4 text-surface-muted leading-relaxed">
              Seamless integration into existing hospital workflows — from admission to discharge.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { step: "01", title: "Admission & Risk Stratification", desc: "Patient is admitted and initial risk assessment is performed." },
              { step: "02", title: "Device Application", desc: "Smart Belly Band or Neonatal Patch is applied based on the patient profile." },
              { step: "03", title: "Continuous Monitoring", desc: "Vital signs are continuously captured and transmitted to the platform." },
              { step: "04", title: "AI Risk Assessment", desc: "Machine learning models analyze trends and generate risk scores in real time." },
              { step: "05", title: "Alert Generation", desc: "Clinically relevant alerts are sent to doctors and nurses based on risk thresholds." },
              { step: "06", title: "Clinical Intervention", desc: "Healthcare team reviews alerts and initiates appropriate interventions." },
              { step: "07", title: "Discharge & Home Monitoring", desc: "Patients are discharged with optional continued monitoring at home." },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  {index < 6 && <div className="w-px h-full bg-teal-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-base font-semibold text-surface-text">{item.title}</h3>
                  <p className="text-sm text-surface-muted mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-surface-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">Technology</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">Built for Clinical Environments</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Brain, title: "AI Risk Engine", desc: "Multi-parameter analysis with explainable risk scoring (0-100)." },
              { icon: Wifi, title: "BLE + Gateway", desc: "Low-energy Bluetooth with hospital-grade gateway infrastructure." },
              { icon: Shield, title: "Privacy by Design", desc: "End-to-end encryption, RBAC, audit logs, and consent management." },
              { icon: Activity, title: "Real-time Streaming", desc: "Sub-second vital sign updates with configurable alert thresholds." },
              { icon: FileCheck, title: "HL7 FHIR Ready", desc: "Designed for interoperability with existing EMR/EHR systems." },
              { icon: Monitor, title: "Multi-Role Dashboards", desc: "Purpose-built views for parents, doctors, nurses, and administrators." },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-card border border-surface-border/50">
                <feature.icon className="w-6 h-6 text-teal-700 mb-4" />
                <h3 className="text-base font-semibold text-surface-text mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Users */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">Platform</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">Designed for Every Stakeholder</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Heart, label: "Parents", href: "/parent", desc: "Real-time vitals & alerts" },
              { icon: Users, label: "Doctors", href: "/doctor", desc: "Clinical decision support" },
              { icon: ClipboardList, label: "Nurses", href: "/nurse", desc: "Ward management" },
              { icon: Building2, label: "Admins", href: "/admin", desc: "Operations analytics" },
              { icon: Globe, label: "Public Health", href: "/public-health", desc: "Population analytics" },
            ].map((user) => (
              <Link
                key={user.label}
                href={user.href}
                className="group bg-surface-bg rounded-2xl p-5 text-center hover:bg-teal-50 hover:border-teal-200 border border-transparent transition-all"
              >
                <user.icon className="w-6 h-6 text-teal-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-surface-text">{user.label}</p>
                <p className="text-xs text-surface-muted mt-1">{user.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="py-20 bg-surface-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">Compliance</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">Planned Compliance Roadmap</h2>
            <p className="mt-4 text-surface-muted">Prototype & Supervised Testing. Regulatory pathway under assessment.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              "CDSCO", "ISO 13485", "ISO 14971", "IEC 62304",
              "IEC 62366", "IEC 60601", "ISO 10993", "ISO 27001",
              "IEC 81001-5-1", "HL7 FHIR", "DPDP Act 2023",
            ].map((standard) => (
              <div key={standard} className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-surface-border text-sm">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span className="text-surface-muted font-medium">{standard}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-surface-muted mt-6 italic">
            All standards shown represent the planned compliance roadmap. No certifications have been achieved.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">Team</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">Leadership</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-surface-bg rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-200 to-teal-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-teal-700 font-bold text-lg">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-surface-text">{member.name}</h3>
                <p className="text-xs text-teal-700 font-medium mt-0.5">{member.role}</p>
                <p className="text-xs text-surface-muted mt-2">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Maternal & Neonatal Care?
          </h2>
          <p className="mt-4 text-teal-100 text-lg">Join us in closing the early detection gap.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-teal-700 rounded-xl font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/doctor"
              className="px-8 py-3.5 border border-teal-400 text-white rounded-xl font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
