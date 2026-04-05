"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Avatar } from "@/components/pro/ui/Avatar";
import { 
  Clock, 
  FileText, 
  Calendar, 
  Send, 
  ChevronRight,
  AlertCircle
} from "lucide-react";
import { CLIENT_STATUSES } from "@/lib/pro/constants";
import { formatRelative } from "@/lib/pro/utils";
import Link from "next/link";
import type { Client } from "@/lib/pro/types";

interface ClientAnalysisInfo {
  status: "pending" | "completed" | "none";
  lastCompletedAt?: string;
  pendingCount?: number;
}

interface ClientAppointmentInfo {
  hasUpcoming: boolean;
  nextDate?: string;
}

interface ClientCardProps {
  client: Client;
  analysisInfo?: ClientAnalysisInfo;
  appointmentInfo?: ClientAppointmentInfo;
  lastContactAt?: string;
  onSendAnalysis?: () => void;
  onScheduleAppointment?: () => void;
  viewMode?: "card" | "row";
}

export function ClientCard({ 
  client, 
  analysisInfo,
  appointmentInfo,
  lastContactAt,
  onSendAnalysis,
  onScheduleAppointment,
  viewMode = "card"
}: ClientCardProps) {
  const statusInfo = CLIENT_STATUSES.find((s) => s.id === client.status);
  
  const daysSinceContact = lastContactAt 
    ? Math.floor((Date.now() - new Date(lastContactAt).getTime()) / (1000 * 60 * 60 * 24))
    : null;
  
  const needsAttention = daysSinceContact !== null && daysSinceContact > 14;

  if (viewMode === "row") {
    return (
      <Link href={`/pro/clients/${client.id}`}>
        <Card hover padding="sm" className="group">
          <div className="flex items-center gap-4">
            <Avatar
              firstName={client.first_name}
              lastName={client.last_name}
              size="md"
            />
            
            <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="sm:col-span-1">
                <p className="text-sm font-semibold text-pro-text truncate">
                  {client.first_name} {client.last_name}
                </p>
                <p className="text-xs text-pro-text-tertiary truncate">
                  {client.email || client.phone || "İletişim bilgisi yok"}
                </p>
              </div>
              
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-pro-text-secondary">
                <Clock className="h-3.5 w-3.5" />
                <span>{lastContactAt ? formatRelative(lastContactAt) : "—"}</span>
              </div>
              
              <div className="hidden sm:flex items-center gap-1.5">
                {analysisInfo?.status === "completed" && (
                  <Badge variant="success" size="sm">Rapor Hazır</Badge>
                )}
                {analysisInfo?.status === "pending" && (
                  <Badge variant="warning" size="sm">Bekliyor</Badge>
                )}
                {(!analysisInfo || analysisInfo.status === "none") && (
                  <span className="text-xs text-pro-text-tertiary">Analiz yok</span>
                )}
              </div>
              
              <div className="hidden sm:flex items-center justify-end gap-2">
                <Badge
                  variant={statusInfo?.color as "success" | "warning" | "muted" || "muted"}
                  dot
                >
                  {statusInfo?.label || client.status}
                </Badge>
                {needsAttention && (
                  <div className="h-5 w-5 rounded-full bg-pro-warning-light flex items-center justify-center" title="14+ gün temas yok">
                    <AlertCircle className="h-3 w-3 text-pro-warning" />
                  </div>
                )}
              </div>
            </div>
            
            <ChevronRight className="h-4 w-4 text-pro-text-tertiary group-hover:text-pro-primary transition-colors shrink-0" />
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/pro/clients/${client.id}`}>
      <Card hover padding="md" className="group h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-start gap-3 mb-3">
            <Avatar
              firstName={client.first_name}
              lastName={client.last_name}
              size="lg"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-pro-text truncate">
                  {client.first_name} {client.last_name}
                </p>
                {needsAttention && (
                  <div className="h-4 w-4 rounded-full bg-pro-warning-light flex items-center justify-center shrink-0" title="14+ gün temas yok">
                    <AlertCircle className="h-2.5 w-2.5 text-pro-warning" />
                  </div>
                )}
              </div>
              <p className="text-xs text-pro-text-tertiary truncate mt-0.5">
                {client.email || client.phone || "İletişim bilgisi yok"}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge
                  variant={statusInfo?.color as "success" | "warning" | "muted" || "muted"}
                  size="sm"
                  dot
                >
                  {statusInfo?.label || client.status}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-pro-text-secondary">
              <Clock className="h-3.5 w-3.5 text-pro-text-tertiary" />
              <span>Son temas: {lastContactAt ? formatRelative(lastContactAt) : "—"}</span>
            </div>
            
            {analysisInfo && analysisInfo.status !== "none" && (
              <div className="flex items-center gap-2 text-pro-text-secondary">
                <FileText className="h-3.5 w-3.5 text-pro-text-tertiary" />
                <span>
                  {analysisInfo.status === "completed" 
                    ? `Rapor hazır${analysisInfo.lastCompletedAt ? ` · ${formatRelative(analysisInfo.lastCompletedAt)}` : ""}`
                    : `${analysisInfo.pendingCount || 1} analiz bekliyor`
                  }
                </span>
              </div>
            )}
            
            {appointmentInfo?.hasUpcoming && (
              <div className="flex items-center gap-2 text-pro-text-secondary">
                <Calendar className="h-3.5 w-3.5 text-pro-text-tertiary" />
                <span>Randevu: {appointmentInfo.nextDate}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-pro-border">
            {onSendAnalysis && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSendAnalysis();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-pro-primary hover:bg-pro-primary-light transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                Analiz Gönder
              </button>
            )}
            {onScheduleAppointment && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onScheduleAppointment();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-pro-accent hover:bg-pro-accent-light transition-colors"
              >
                <Calendar className="h-3.5 w-3.5" />
                Randevu Ekle
              </button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
