"use client";

import Link from "next/link";
import { Heart, Target, Eye, ArrowRight } from "lucide-react";
import { teamMembers } from "@/lib/demo-data";

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-surface-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
            About MaaKosh
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">
            Our Mission
          </h1>
          <p className="mt-4 text-lg text-surface-muted max-w-2xl mx-auto leading-relaxed">
            Shift maternal and neonatal healthcare from episodic observation
            toward continuous risk awareness and early intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-card border border-surface-border/50 text-center">
            <Heart className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="text-base font-semibold text-surface-text mb-2">
              Our Purpose
            </h3>
            <p className="text-sm text-surface-muted">
              Every mother and newborn deserves continuous monitoring and early
              detection of complications — not just periodic check-ups.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border border-surface-border/50 text-center">
            <Target className="w-8 h-8 text-medical-blue mx-auto mb-4" />
            <h3 className="text-base font-semibold text-surface-text mb-2">
              Our Approach
            </h3>
            <p className="text-sm text-surface-muted">
              Purpose-built wearable devices paired with AI-driven analytics to
              identify risk indicators before complications escalate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border border-surface-border/50 text-center">
            <Eye className="w-8 h-8 text-medical-emerald mx-auto mb-4" />
            <h3 className="text-base font-semibold text-surface-text mb-2">
              Our Vision
            </h3>
            <p className="text-sm text-surface-muted">
              A world where no maternal or neonatal complication goes undetected
              due to gaps in monitoring coverage.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-surface-text text-center mb-8">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-card border border-surface-border/50 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200 to-teal-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-teal-700 font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-surface-text">
                  {member.name}
                </h3>
                <p className="text-sm text-teal-700 font-medium mt-0.5">
                  {member.role}
                </p>
                <p className="text-xs text-surface-muted mt-2">
                  {member.background}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Join Our Mission
          </h2>
          <p className="text-teal-100 mb-6">
            Partner with us to transform maternal and neonatal healthcare.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold text-sm hover:bg-teal-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
