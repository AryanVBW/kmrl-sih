"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Upload,
  Search,
  Filter,
  FileText,
  Video,
  Archive,
  Download,
  Share,
  Eye,
  MoreHorizontal,
  Calendar,
  User,
  Tag,
  Globe,
  Smartphone,
  Mail,
  FolderOpen,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  ImageIcon,
} from "lucide-react"

const documents = [
  {
    id: 1,
    name: "Safety Protocol Update v3.2",
    type: "PDF",
    size: "2.4 MB",
    department: "Engineering",
    uploadedBy: "John Smith",
    uploadedAt: "2024-01-15T10:30:00Z",
    status: "processed",
    tags: ["safety", "protocol", "urgent"],
    source: "email",
    aiSummary:
      "Updated safety protocols for metro operations including new emergency procedures and equipment guidelines.",
    language: "English",
    translated: true,
  },
  {
    id: 2,
    name: "HR Policy Manual Malayalam",
    type: "DOCX",
    size: "1.8 MB",
    department: "HR",
    uploadedBy: "Priya Nair",
    uploadedAt: "2024-01-15T09:15:00Z",
    status: "translating",
    tags: ["hr", "policy", "manual"],
    source: "whatsapp",
    aiSummary: "Comprehensive HR policy manual covering employee guidelines, benefits, and procedures.",
    language: "Malayalam",
    translated: false,
  },
  {
    id: 3,
    name: "Vendor Contract - ABC Ltd",
    type: "PDF",
    size: "3.1 MB",
    department: "Finance",
    uploadedBy: "Raj Kumar",
    uploadedAt: "2024-01-15T08:45:00Z",
    status: "review",
    tags: ["contract", "vendor", "finance"],
    source: "sharepoint",
    aiSummary: "Service contract with ABC Ltd for maintenance services, expires March 2024.",
    language: "English",
    translated: false,
  },
  {
    id: 4,
    name: "Board Meeting Minutes Jan 2024",
    type: "PDF",
    size: "892 KB",
    department: "Management",
    uploadedBy: "Admin User",
    uploadedAt: "2024-01-15T07:20:00Z",
    status: "blockchain",
    tags: ["meeting", "board", "minutes"],
    source: "scan",
    aiSummary: "Board meeting discussing Q4 performance, budget allocation, and strategic initiatives.",
    language: "English",
    translated: true,
  },
]

const uploadSources = [
  { id: "email", name: "Email", icon: Mail, count: 1247 },
  { id: "whatsapp", name: "WhatsApp", icon: Smartphone, count: 892 },
  { id: "scan", name: "Document Scan", icon: FileText, count: 634 },
  { id: "sharepoint", name: "SharePoint", icon: FolderOpen, count: 423 },
]

export function DocumentManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "translating":
        return <Globe className="h-4 w-4 text-blue-500" />
      case "review":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      case "blockchain":
        return <Zap className="h-4 w-4 text-purple-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Processed</Badge>
      case "translating":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Translating</Badge>
      case "review":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">Review</Badge>
      case "blockchain":
        return <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">Secured</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      case "docx":
      case "doc":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "jpg":
      case "png":
      case "jpeg":
        return <ImageIcon className="h-5 w-5 text-green-500" />
      case "mp4":
      case "avi":
        return <Video className="h-5 w-5 text-purple-500" />
      default:
        return <Archive className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Management</h1>
          <p className="text-muted-foreground">Upload, organize, and manage documents from multiple sources</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Upload Documents
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Bulk Export
          </Button>
        </div>
      </div>

      {/* Upload Sources */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {uploadSources.map((source) => (
          <Card key={source.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <source.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{source.name}</p>
                <p className="text-sm text-muted-foreground">{source.count} documents</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search documents by name, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="management">Management</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="processed">Processed</SelectItem>
                  <SelectItem value="translating">Translating</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="blockchain">Secured</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="bg-transparent">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document List */}
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted">{getFileIcon(doc.type)}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">{doc.aiSummary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(doc.status)}
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {doc.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {doc.uploadedBy}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(doc.uploadedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Archive className="h-4 w-4" />
                        {doc.size}
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(doc.status)}
                        {doc.department}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          {doc.language}
                        </span>
                        {doc.translated && (
                          <Badge variant="secondary" className="text-xs">
                            Translated
                          </Badge>
                        )}
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
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="grid" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-muted">{getFileIcon(doc.type)}</div>
                  {getStatusBadge(doc.status)}
                </div>
                <CardTitle className="text-base line-clamp-2">{doc.name}</CardTitle>
                <CardDescription className="line-clamp-2">{doc.aiSummary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {doc.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {doc.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{doc.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    {doc.uploadedBy}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {new Date(doc.uploadedAt).toLocaleString()}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Share className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            {documents.map((doc, index) => (
              <div key={doc.id} className="relative flex gap-4 pb-8">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
                  {getFileIcon(doc.type)}
                </div>
                <div className="flex-1">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{doc.name}</h3>
                        {getStatusBadge(doc.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{doc.aiSummary}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{doc.uploadedBy}</span>
                        <span>{new Date(doc.uploadedAt).toLocaleString()}</span>
                        <span>{doc.department}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
