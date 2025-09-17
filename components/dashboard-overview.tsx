"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GlassCard } from "@/components/glass-card"
import {
  FileText,
  Upload,
  Brain,
  Shield,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Zap,
  BarChart3,
  Train,
} from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* KMRL Hero Section with train image and branding */}
      <GlassCard variant="elevated" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/5 to-purple-500/10" />
        <div className="relative p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/kmrl-logo-full.png" alt="KMRL with Government Logos" className="h-16 w-auto" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 [background:linear-gradient(45deg,#0d9488,#14b8a6,#06b6d4)] bg-clip-text [-webkit-text-fill-color:transparent] [&:not(:hover)]:text-foreground">
                KMRL Document Management System
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Solving Document Overload with AI-Powered Intelligence for Kochi Metro Rail Limited
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-teal-700 text-white border-0 hover:bg-teal-800 px-3 py-1">
                  <Train className="h-3 w-3 mr-1" />
                  Metro Operations
                </Badge>
                <Badge className="bg-blue-700 text-white border-0 hover:bg-blue-800 px-3 py-1">
                  <Brain className="h-3 w-3 mr-1" />
                  AI-Powered
                </Badge>
                <Badge className="bg-emerald-700 text-white border-0 hover:bg-emerald-800 px-3 py-1">
                  <Shield className="h-3 w-3 mr-1" />
                  Compliance Ready
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-2xl blur-xl" />
              <img
                src="/images/train.png"
                alt="Kochi Metro Train"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground [background:linear-gradient(45deg,#0f172a,#334155,#64748b)] bg-clip-text [-webkit-text-fill-color:transparent] [&:not(:hover)]:text-foreground">
            Welcome back, Operations Manager
          </h2>
          <p className="text-muted-foreground">Your intelligent document command center for Metro Operations</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg text-white border-0">
            <Upload className="h-4 w-4" />
            Quick Upload
          </Button>
          <Button
            variant="outline"
            className="gap-2 bg-background/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-background/90 text-foreground hover:border-slate-300 dark:hover:border-slate-600"
          >
            <Brain className="h-4 w-4" />
            AI Assistant
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <GlassCard variant="elevated" className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-foreground">KMRL Documents</h3>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">24,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">+12.3%</span> since 2017 operations
            </p>
          </div>
        </GlassCard>

        <GlassCard variant="elevated" className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-foreground">AI Processed</h3>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">18,924</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">+34%</span> efficiency gain
            </p>
          </div>
        </GlassCard>

        <GlassCard variant="elevated" className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-foreground">Safety Compliance</h3>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">98.7%</div>
            <Progress value={98.7} className="mt-2 bg-muted/50" />
          </div>
        </GlassCard>

        <GlassCard variant="elevated" className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-foreground">Metro Staff</h3>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-muted-foreground">Across metro operations</p>
          </div>
        </GlassCard>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions */}
        <GlassCard variant="elevated" className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                <Zap className="h-3 w-3 text-white" />
              </div>
              Metro Quick Actions
            </CardTitle>
            <CardDescription>Streamline KMRL operations with one-click actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 bg-background/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-background/90 text-foreground hover:border-slate-300 dark:hover:border-slate-600"
            >
              <Upload className="h-4 w-4" />
              Upload Safety Reports
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 bg-background/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-background/90 text-foreground hover:border-slate-300 dark:hover:border-slate-600"
            >
              <Brain className="h-4 w-4" />
              Analyze Maintenance Logs
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 bg-background/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-background/90 text-foreground hover:border-slate-300 dark:hover:border-slate-600"
            >
              <Globe className="h-4 w-4" />
              Translate Malayalam Docs
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 bg-background/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-background/90 text-foreground hover:border-slate-300 dark:hover:border-slate-600"
            >
              <Shield className="h-4 w-4" />
              CMRS Compliance Check
            </Button>
          </CardContent>
        </GlassCard>

        {/* Recent Activity */}
        <GlassCard variant="elevated" className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center">
                <Clock className="h-3 w-3 text-white" />
              </div>
              Recent Metro Activity
            </CardTitle>
            <CardDescription>Latest KMRL document uploads and AI processing results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Train Safety Inspection Report</p>
                  <p className="text-xs text-muted-foreground">Rolling Stock Engineering • 5 minutes ago</p>
                </div>
                <Badge className="bg-emerald-700 text-white border-0 hover:bg-emerald-800">AI Processed</Badge>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">CMRS Safety Circular Update</p>
                  <p className="text-xs text-muted-foreground">Safety Department • 12 minutes ago</p>
                </div>
                <Badge
                  variant="outline"
                  className="border-slate-600 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Translating
                </Badge>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Spare Parts Procurement Contract</p>
                  <p className="text-xs text-muted-foreground">Finance & Procurement • 45 minutes ago</p>
                </div>
                <Badge className="bg-amber-700 text-white border-0 hover:bg-amber-800">Needs Review</Badge>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Board Meeting Minutes - Expansion Plans</p>
                  <p className="text-xs text-muted-foreground">Executive Management • 1 hour ago</p>
                </div>
                <Badge className="bg-indigo-700 text-white border-0 hover:bg-indigo-800">Blockchain Logged</Badge>
              </div>
            </div>
          </CardContent>
        </GlassCard>
      </div>

      {/* Department Overview & Alerts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Department Overview */}
        <GlassCard variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                <Users className="h-3 w-3 text-white" />
              </div>
              KMRL Department Overview
            </CardTitle>
            <CardDescription>Document distribution across metro departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-teal-600" />
                  <span className="text-sm font-medium text-foreground">Rolling Stock Engineering</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">8,234 docs</div>
                  <div className="text-xs text-muted-foreground">33%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-600" />
                  <span className="text-sm font-medium text-foreground">Operations & Safety</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">6,847 docs</div>
                  <div className="text-xs text-muted-foreground">28%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-600" />
                  <span className="text-sm font-medium text-foreground">Finance & Procurement</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">5,156 docs</div>
                  <div className="text-xs text-muted-foreground">21%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-indigo-600" />
                  <span className="text-sm font-medium text-foreground">Executive Management</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">4,610 docs</div>
                  <div className="text-xs text-muted-foreground">18%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </GlassCard>

        {/* Compliance Alerts */}
        <GlassCard variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                <AlertTriangle className="h-3 w-3 text-white" />
              </div>
              KMRL Compliance Alerts
            </CardTitle>
            <CardDescription>Critical regulatory items requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 backdrop-blur-sm border border-red-200 dark:border-red-800/50">
                <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900 dark:text-red-100">CMRS Safety Audit Overdue</p>
                  <p className="text-xs text-red-700 dark:text-red-300">Rolling Stock Engineering - Due 2 days ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200 dark:border-amber-800/50">
                <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100">MoHUA Report Due</p>
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    Ministry of Housing & Urban Affairs - Due in 5 days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/50">
                <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                    Environmental Clearance Updated
                  </p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    All environmental impact studies current
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </GlassCard>
      </div>

      {/* AI Insights Preview */}
      <GlassCard variant="elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
              <Brain className="h-3 w-3 text-white" />
            </div>
            KMRL AI Insights & Analytics
          </CardTitle>
          <CardDescription>Smart analysis of metro document ecosystem since 2017</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm border border-teal-500/30">
              <div className="h-12 w-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">92%</div>
              <div className="text-sm text-muted-foreground">Metro Docs Auto-Tagged</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-500/30">
              <div className="h-12 w-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">3,247</div>
              <div className="text-sm text-muted-foreground">Malayalam Translations</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30">
              <div className="h-12 w-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">47%</div>
              <div className="text-sm text-muted-foreground">Metro Efficiency Gain</div>
            </div>
          </div>
        </CardContent>
      </GlassCard>
    </div>
  )
}
