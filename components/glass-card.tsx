import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "elevated" | "subtle"
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg",
    elevated: "bg-background/90 backdrop-blur-2xl border border-white/20 shadow-2xl",
    subtle: "bg-background/60 backdrop-blur-lg border border-white/5 shadow-md",
  }

  return <div className={cn("rounded-xl", variants[variant], className)}>{children}</div>
}
