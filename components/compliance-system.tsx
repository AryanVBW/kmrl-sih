"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Eye,
  FileText,
  Zap,
  Calendar,
  User,
  Hash,
  Lock,
  TrendingUp,
  BarChart3,
  Search,
  Filter,
  RefreshCw,
  Bell,
  ExternalLink,
  Award,
  Target,
  Clipboard,
  BookOpen,
  Scale,
} from "lucide-react"

const complianceMetrics = {
  overallScore: 94.2,
  totalChecks: 247,
  passed: 233,
  failed: 8,
  pending: 6,
  lastAudit: "2024-01-10",
}

const complianceAlerts = [
  {
    id: 1,
    type: "critical",
    title: "Safety Audit Overdue",
    description: "Engineering department safety audit is 3 days overdue",
    department: "Engineering",
    dueDate: "2024-01-12",
    status: "overdue",
    priority: "high",
  },
  {
    id: 2,
    type: "warning",
    title: "Contract Renewal Due",
    description: "Vendor ABC Ltd contract expires in 7 days",
    department: "Finance",
    dueDate: "2024-01-22",
    status: "upcoming",
    priority: "medium",
  },
  {
    id: 3,
    type: "info",
    title: "Policy Update Required",
    description: "HR policy manual needs annual review",
    department: "HR",
    dueDate: "2024-01-30",
    status: "scheduled",
    priority: "low",
  },
]

const blockchainLogs = [
  {
    id: 1,
    action: "Document Upload",
    document: "Safety Protocol Update v3.2",
    user: "John Smith",
    timestamp: "2024-01-15T10:30:00Z",
    hash: "0x1a2b3c4d5e6f7890abcdef1234567890",
    status: "verified",
    department: "Engineering",
  },
  {
    id: 2,
    action: "Document Approval",
    document: "HR Policy Manual v2.1",
    user: "Priya Nair",
    timestamp: "2024-01-15T09:15:00Z",
    hash: "0x9876543210fedcba0987654321abcdef",
    status: "verified",
    department: "HR",
  },
  {
    id: 3,
    action: "Document Access",
    document: "Board Meeting Minutes Jan 2024",
    user: "Admin User",
    timestamp: "2024-01-15T08:45:00Z",
    hash: "0xabcdef1234567890fedcba0987654321",
    status: "verified",
    department: "Management",
  },
  {
    id: 4,
    action: "Document Deletion",
    document: "Outdated Contract Template",
    user: "Raj Kumar",
    timestamp: "2024-01-15T07:20:00Z",
    hash: "0x567890abcdef1234567890abcdef1234",
    status: "verified",
    department: "Finance",
  },
]

const complianceCategories = [
  {
    id: "safety",
    name: "Safety & Security",
    icon: Shield,
    score: 96.8,
    total: 45,
    passed: 44,
    failed: 1,
    color: "text-green-600",
  },
  {
    id: "financial",
    name: "Financial Compliance",
    icon: Scale,
    score: 92.1,
    total: 38,
    passed: 35,
    failed: 2,
    color: "text-blue-600",
  },
  {
    id: "regulatory",
    name: "Regulatory Requirements",
    icon: BookOpen,
    score: 94.7,
    total: 57,
    passed: 54,
    failed: 2,
    color: "text-purple-600",
  },
  {
    id: "operational",
    name: "Operational Standards",
    icon: Target,
    score: 91.3,
    total: 42,
    passed: 38,
    failed: 3,
    color: "text-orange-600",
  },
]

export function ComplianceSystem() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "warning":
        return <Clock className="h-5 w-5 text-orange-500" />
      case "info":
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />
    }
  }

  const getAlertBadge = (type: string) => {
    switch (type) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      case "warning":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">Warning</Badge>
      case "info":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Info</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>
      case "upcoming":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">Upcoming</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Scheduled</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Compliance & Audit System</h1>
          <p className="text-muted-foreground">Real-time compliance monitoring with blockchain-secured audit trails</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="h-4 w-4 text-green-500" />
              Overall Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{complianceMetrics.overallScore}%</div>
            <Progress value={complianceMetrics.overallScore} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Checks Passed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceMetrics.passed}</div>
            <p className="text-xs text-muted-foreground">of {complianceMetrics.totalChecks} total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Failed Checks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{complianceMetrics.failed}</div>
            <p className="text-xs text-muted-foreground">Require immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              Pending Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{complianceMetrics.pending}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clipboard className="h-5 w-5" />
            Compliance Categories
          </CardTitle>
          <CardDescription>Detailed breakdown by compliance area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {complianceCategories.map((category) => (
              <div key={category.id} className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{category.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {category.passed}/{category.total} passed
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Score</span>
                    <span className={`text-sm font-bold ${category.color}`}>{category.score}%</span>
                  </div>
                  <Progress value={category.score} className="h-2" />
                  {category.failed > 0 && <p className="text-xs text-red-600">{category.failed} failed checks</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="alerts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts">Compliance Alerts</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Audit Trail</TabsTrigger>
          <TabsTrigger value="reports">Audit Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Active Compliance Alerts
                  </CardTitle>
                  <CardDescription>Critical items requiring immediate attention</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-muted">{getAlertIcon(alert.type)}</div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{alert.title}</h4>
                          <p className="text-sm text-muted-foreground">{alert.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getAlertBadge(alert.type)}
                          {getStatusBadge(alert.status)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{alert.department}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Due: {new Date(alert.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            View Details
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Blockchain Audit Trail
                  </CardTitle>
                  <CardDescription>Immutable record of all document activities</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Export Logs
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blockchainLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-start gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-muted">
                      <Lock className="h-5 w-5 text-purple-500" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{log.action}</h4>
                          <p className="text-sm text-muted-foreground">{log.document}</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                          Verified
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {log.user}
                          </span>
                          <span>{log.department}</span>
                          <span>{new Date(log.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Hash className="h-3 w-3" />
                          <span className="truncate">{log.hash}</span>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Compliance Trends
                </CardTitle>
                <CardDescription>Historical compliance performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">This Month</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">94.2%</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Last Month</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">91.8%</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">3 Months Ago</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">89.5%</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Generate Reports
                </CardTitle>
                <CardDescription>Create custom compliance reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Monthly Compliance Report
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Audit Trail Export
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Department Summary
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Custom Report Builder
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
