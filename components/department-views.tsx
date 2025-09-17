"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Wrench,
  DollarSign,
  Building,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Calendar,
  Download,
  Eye,
  Share,
  Filter,
  Search,
  Bell,
  Shield,
  Briefcase,
  GraduationCap,
  Heart,
  Calculator,
  CreditCard,
  Receipt,
  Settings,
  Target,
  Award,
  BookOpen,
} from "lucide-react"

const departments = [
  {
    id: "hr",
    name: "Human Resources",
    icon: Users,
    color: "bg-blue-500",
    documents: 2847,
    pending: 12,
    urgent: 3,
    description: "Employee policies, training materials, and HR documentation",
  },
  {
    id: "engineering",
    name: "Engineering",
    icon: Wrench,
    color: "bg-green-500",
    documents: 4234,
    pending: 8,
    urgent: 5,
    description: "Technical specifications, safety protocols, and maintenance guides",
  },
  {
    id: "finance",
    name: "Finance",
    icon: DollarSign,
    color: "bg-orange-500",
    documents: 3156,
    pending: 15,
    urgent: 7,
    description: "Financial reports, contracts, and budget documentation",
  },
  {
    id: "management",
    name: "Management",
    icon: Building,
    color: "bg-purple-500",
    documents: 2610,
    pending: 6,
    urgent: 2,
    description: "Strategic plans, board minutes, and executive reports",
  },
]

const hrDocuments = [
  {
    id: 1,
    title: "Employee Handbook 2024",
    type: "Policy",
    status: "active",
    lastUpdated: "2024-01-10",
    category: "Policies",
    priority: "high",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Training Schedule Q1",
    type: "Training",
    status: "pending",
    lastUpdated: "2024-01-12",
    category: "Training",
    priority: "medium",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Health & Safety Guidelines",
    type: "Safety",
    status: "review",
    lastUpdated: "2024-01-08",
    category: "Safety",
    priority: "high",
    icon: Heart,
  },
  {
    id: 4,
    title: "Performance Review Template",
    type: "Template",
    status: "active",
    lastUpdated: "2024-01-05",
    category: "Performance",
    priority: "low",
    icon: Target,
  },
]

const engineeringDocuments = [
  {
    id: 1,
    title: "Safety Protocol Update v3.2",
    type: "Protocol",
    status: "active",
    lastUpdated: "2024-01-15",
    category: "Safety",
    priority: "urgent",
    icon: Shield,
  },
  {
    id: 2,
    title: "Maintenance Schedule Line 2",
    type: "Schedule",
    status: "pending",
    lastUpdated: "2024-01-14",
    category: "Maintenance",
    priority: "high",
    icon: Settings,
  },
  {
    id: 3,
    title: "Equipment Inspection Report",
    type: "Report",
    status: "review",
    lastUpdated: "2024-01-13",
    category: "Inspection",
    priority: "medium",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Technical Specifications v2.1",
    type: "Specification",
    status: "active",
    lastUpdated: "2024-01-11",
    category: "Technical",
    priority: "low",
    icon: FileText,
  },
]

const financeDocuments = [
  {
    id: 1,
    title: "Vendor Contract - ABC Ltd",
    type: "Contract",
    status: "review",
    lastUpdated: "2024-01-15",
    category: "Contracts",
    priority: "urgent",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Q4 Budget Report",
    type: "Report",
    status: "active",
    lastUpdated: "2024-01-12",
    category: "Budget",
    priority: "high",
    icon: Calculator,
  },
  {
    id: 3,
    title: "Invoice Processing Guidelines",
    type: "Guideline",
    status: "pending",
    lastUpdated: "2024-01-10",
    category: "Process",
    priority: "medium",
    icon: Receipt,
  },
  {
    id: 4,
    title: "Payment Authorization Form",
    type: "Form",
    status: "active",
    lastUpdated: "2024-01-08",
    category: "Authorization",
    priority: "low",
    icon: CreditCard,
  },
]

const managementDocuments = [
  {
    id: 1,
    title: "Board Meeting Minutes Jan 2024",
    type: "Minutes",
    status: "active",
    lastUpdated: "2024-01-15",
    category: "Board",
    priority: "high",
    icon: Building,
  },
  {
    id: 2,
    title: "Strategic Plan 2024-2026",
    type: "Strategy",
    status: "review",
    lastUpdated: "2024-01-12",
    category: "Strategy",
    priority: "high",
    icon: Target,
  },
  {
    id: 3,
    title: "Performance Dashboard Q4",
    type: "Dashboard",
    status: "active",
    lastUpdated: "2024-01-10",
    category: "Performance",
    priority: "medium",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Compliance Report 2023",
    type: "Report",
    status: "pending",
    lastUpdated: "2024-01-08",
    category: "Compliance",
    priority: "low",
    icon: Award,
  },
]

export function DepartmentViews() {
  const [selectedDepartment, setSelectedDepartment] = useState("hr")

  const getDepartmentDocuments = (deptId: string) => {
    switch (deptId) {
      case "hr":
        return hrDocuments
      case "engineering":
        return engineeringDocuments
      case "finance":
        return financeDocuments
      case "management":
        return managementDocuments
      default:
        return []
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Active</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">Pending</Badge>
      case "review":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">Review</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "high":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">High</Badge>
      case "medium":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Medium</Badge>
      case "low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const currentDepartment = departments.find((dept) => dept.id === selectedDepartment)
  const documents = getDepartmentDocuments(selectedDepartment)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Department Views</h1>
          <p className="text-muted-foreground">Role-based document access tailored for each department</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Bell className="h-4 w-4" />
            Notifications
          </Button>
        </div>
      </div>

      {/* Department Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {departments.map((dept) => (
          <Card
            key={dept.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedDepartment === dept.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedDepartment(dept.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${dept.color}`}>
                  <dept.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.documents} documents</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {dept.pending > 0 && (
                  <Badge variant="outline" className="text-xs">
                    {dept.pending} pending
                  </Badge>
                )}
                {dept.urgent > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {dept.urgent} urgent
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Department-Specific Content */}
      {currentDepartment && (
        <div className="space-y-6">
          {/* Department Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl ${currentDepartment.color}`}>
                  <currentDepartment.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">{currentDepartment.name}</CardTitle>
                  <CardDescription className="text-base">{currentDepartment.description}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{currentDepartment.documents.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Documents</div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Department Metrics */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Active Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{documents.filter((doc) => doc.status === "active").length}</div>
                <p className="text-xs text-muted-foreground">Ready for use</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  Pending Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {documents.filter((doc) => doc.status === "pending" || doc.status === "review").length}
                </div>
                <p className="text-xs text-muted-foreground">Awaiting action</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  Urgent Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{documents.filter((doc) => doc.priority === "urgent").length}</div>
                <p className="text-xs text-muted-foreground">Needs immediate attention</p>
              </CardContent>
            </Card>
          </div>

          {/* Document List */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Documents</CardTitle>
                  <CardDescription>Latest documents for {currentDepartment.name}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-muted">
                      <doc.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {doc.category} • {doc.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(doc.status)}
                          {getPriorityBadge(doc.priority)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(doc.lastUpdated).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Share className="h-4 w-4" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
