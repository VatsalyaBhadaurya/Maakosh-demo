"use client";

import Link from "next/link";
import { Monitor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center">
                <Monitor className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-surface-text">
                MaaKosh
              </span>
            </div>
            <p className="text-sm text-surface-muted leading-relaxed">
              Continuous Monitoring. Early Detection. Better Outcomes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-surface-text mb-3">
              Platform
            </h4>
            <div className="space-y-2">
              <Link
                href="/devices"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Device Ecosystem
              </Link>
              <Link
                href="/doctor"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Clinical Dashboard
              </Link>
              <Link
                href="/workflows"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Clinical Workflows
              </Link>
              <Link
                href="/compliance"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Compliance
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-surface-text mb-3">
              Company
            </h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-surface-text mb-3">
              Legal
            </h4>
            <div className="space-y-2">
              <Link
                href="/compliance"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/compliance"
                className="block text-sm text-surface-muted hover:text-teal-700 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-surface-muted">
              &copy; {new Date().getFullYear()} MaaKosh Health Technologies Pvt.
              Ltd. All rights reserved.
            </p>
            <p className="text-xs text-surface-muted italic max-w-xl text-center sm:text-right">
              MaaKosh is intended as a clinical decision-support and monitoring
              platform. The system does not independently diagnose, prescribe, or
              replace professional medical judgment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
