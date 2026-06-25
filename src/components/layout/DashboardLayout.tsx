"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Monitor,
  Heart,
  Stethoscope,
  ClipboardList,
  Building2,
  Globe,
  Shield,
  Cpu,
  Home,
  GitBranch,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/devices", label: "Devices", icon: Cpu },
  { href: "/parent", label: "Parent", icon: Heart },
  { href: "/doctor", label: "Doctor", icon: Stethoscope },
  { href: "/nurse", label: "Nurse", icon: ClipboardList },
  { href: "/admin", label: "Admin", icon: Building2 },
  { href: "/public-health", label: "Public Health", icon: Globe },
  { href: "/workflows", label: "Workflows", icon: GitBranch },
  { href: "/compliance", label: "Compliance", icon: Shield },
];

export default function DashboardLayout({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-surface-bg pt-16">
      <div className="flex">
        <aside className="hidden lg:block w-60 fixed left-0 top-16 bottom-0 bg-white border-r border-surface-border overflow-y-auto">
          <div className="p-4 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-teal-50 text-teal-700 shadow-sm"
                      : "text-surface-muted hover:text-surface-text hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                  )}
                </Link>
              );
            })}
          </div>
        </aside>

        <main className="flex-1 lg:ml-60">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-surface-text">{title}</h1>
              {subtitle && (
                <p className="text-sm text-surface-muted mt-1">{subtitle}</p>
              )}
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
