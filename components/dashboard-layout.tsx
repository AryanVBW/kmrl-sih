"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"
import { GlassCard } from "@/components/glass-card"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Bell,
  Search,
  Menu,
  X,
  FileText,
  Brain,
  Users,
  Shield,
  Settings,
  Home,
  Upload,
  BarChart3,
  Smartphone,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Documents", href: "/documents", icon: FileText, current: false },
  { name: "AI Insights", href: "/insights", icon: Brain, current: false },
  { name: "Departments", href: "/departments", icon: Users, current: false },
  { name: "Compliance", href: "/compliance", icon: Shield, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
  { name: "Mobile App", href: "/mobile", icon: Smartphone, current: false },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notifications] = useState(12)

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      {/* Mobile sidebar */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", sidebarOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64">
          <GlassCard variant="elevated" className="h-full rounded-none rounded-r-xl">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <img src="/images/kmrl-logo.png" alt="KMRL Logo" className="h-8 w-auto" />
                <div>
                  <span className="font-semibold text-lg text-foreground [background:linear-gradient(45deg,#0d9488,#14b8a6)] bg-clip-text [-webkit-text-fill-color:transparent] [&:not(:hover)]:text-foreground">
                    KMRL DocuFlow
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="px-4 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    item.current
                      ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-600 dark:text-blue-300 shadow-lg backdrop-blur-sm border border-blue-500/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/10 hover:backdrop-blur-sm",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ))}
            </nav>
          </GlassCard>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <GlassCard
          variant="elevated"
          className="flex grow flex-col gap-y-5 overflow-y-auto px-6 py-4 rounded-none rounded-r-2xl"
        >
          <div className="flex h-16 shrink-0 items-center gap-3">
            <img src="/images/kmrl-logo.png" alt="KMRL Logo" className="h-10 w-auto" />
            <div>
              <h1 className="font-bold text-xl text-foreground [background:linear-gradient(45deg,#0d9488,#14b8a6,#ec4899)] bg-clip-text [-webkit-text-fill-color:transparent] [&:not(:hover)]:text-foreground">
                KMRL DocuFlow
              </h1>
              <p className="text-xs text-muted-foreground">Document Management System</p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      "group flex gap-x-3 rounded-xl p-3 text-sm font-medium leading-6 transition-all duration-200",
                      item.current
                        ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-600 dark:text-blue-300 shadow-lg backdrop-blur-sm border border-blue-500/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-md",
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </GlassCard>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <GlassCard variant="elevated" className="flex flex-1 items-center gap-x-4 px-4 py-2">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex flex-1 gap-x-4 items-center">
              <div className="relative flex flex-1 items-center max-w-md">
                <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
                <input
                  className="block h-10 w-full rounded-lg border-0 bg-background/80 backdrop-blur-sm pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:bg-background/90 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="Search documents, policies, reports..."
                  type="search"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm border border-blue-500/30 text-foreground"
                >
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">Upload</span>
                </Button>
                <Button variant="ghost" size="sm" className="relative hover:bg-white/20">
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500 border-0 text-white">
                      {notifications}
                    </Badge>
                  )}
                </Button>
                <ThemeToggle />
                <Button variant="ghost" size="sm" className="hover:bg-white/20">
                  <Settings className="h-5 w-5" />
                </Button>
                <Avatar className="h-8 w-8 ring-2 ring-blue-500/20">
                  <AvatarImage src="/placeholder-user.png" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
