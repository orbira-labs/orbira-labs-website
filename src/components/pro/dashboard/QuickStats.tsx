"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/pro/ui/Card";
import { cardReveal } from "@/lib/pro/animations";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  key: string;
  label: string;
  value: number | string;
  icon: LucideIcon;
  href: string;
  trend?: number;
  gradient?: string;
  iconBg: string;
  iconColor: string;
  accentBar: string;
  valueColor: string;
}

interface QuickStatsProps {
  stats: StatItem[];
  loading?: boolean;
}

export function QuickStats({ stats, loading = false }: QuickStatsProps) {
  if (loading) {
    return (
      <Card padding="none" variant="elevated">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-pro-border">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-5">
              <div className="animate-pulse">
                <div className="h-4 w-20 bg-pro-surface-alt rounded mb-3" />
                <div className="h-8 w-14 bg-pro-surface-alt rounded" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <motion.div variants={cardReveal} initial="hidden" animate="visible">
      <Card padding="none" variant="elevated" className="overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Link
              key={stat.key}
              href={stat.href}
              className={`
                group relative p-4 sm:p-5 transition-all duration-200
                hover:bg-pro-surface-alt/50
                ${index !== stats.length - 1 ? "border-r border-pro-border" : ""}
                ${index < 2 ? "border-b border-pro-border lg:border-b-0" : ""}
              `}
            >
              {/* Accent line on hover */}
              <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${stat.accentBar} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-pro-text-secondary font-medium mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-2xl sm:text-3xl font-bold tabular-nums ${stat.valueColor}`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`h-10 w-10 rounded-xl ${stat.iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
