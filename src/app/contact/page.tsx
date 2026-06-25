"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Building2,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16 min-h-screen bg-surface-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
            Contact
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-surface-text">
            Get in Touch
          </h1>
          <p className="mt-4 text-surface-muted max-w-lg mx-auto">
            Interested in a demo, partnership, or pilot program? We&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-12 text-center animate-fade-in">
                <CheckCircle className="w-12 h-12 text-medical-emerald mx-auto mb-4" />
                <h2 className="text-xl font-bold text-surface-text mb-2">
                  Thank You!
                </h2>
                <p className="text-surface-muted">
                  We&apos;ve received your message and will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-6">
                <h2 className="text-lg font-semibold text-surface-text mb-6">
                  Request a Demo
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-surface-text mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                        placeholder="Arjun"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-surface-text mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                        placeholder="Mehta"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-surface-text mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                      placeholder="arjun@hospital.org"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-surface-text mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                      placeholder="City Hospital"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-surface-text mb-1.5">
                      I am a...
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors">
                      <option value="">Select your role</option>
                      <option value="doctor">Healthcare Professional</option>
                      <option value="admin">Hospital Administrator</option>
                      <option value="investor">Investor</option>
                      <option value="government">Government Official</option>
                      <option value="researcher">Researcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-surface-text mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors resize-none"
                      placeholder="Tell us about your interest in MaaKosh..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 text-white rounded-xl font-semibold text-sm hover:bg-teal-800 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-card border border-surface-border/50 p-5">
              <h3 className="text-sm font-semibold text-surface-text mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-surface-text">
                      contact@maakosh.health
                    </p>
                    <p className="text-xs text-surface-muted">General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-surface-text">
                      +91 (22) 4567-8901
                    </p>
                    <p className="text-xs text-surface-muted">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-surface-text">
                      MaaKosh Health Technologies
                    </p>
                    <p className="text-xs text-surface-muted">
                      BKC, Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-2xl p-5 border border-teal-200">
              <Building2 className="w-5 h-5 text-teal-700 mb-3" />
              <h3 className="text-sm font-semibold text-teal-700 mb-2">
                For Hospitals & Partners
              </h3>
              <p className="text-xs text-teal-600">
                Interested in a pilot program? We offer supervised testing
                deployments for hospitals looking to enhance maternal and
                neonatal care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
