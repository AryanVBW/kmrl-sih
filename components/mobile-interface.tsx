"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Bell,
  MessageSquare,
  Camera,
  Download,
  QrCode,
  Wifi,
  Battery,
  Signal,
  Settings,
  Search,
  Zap,
  Globe,
  Clock,
  CheckCircle,
  AlertTriangle,
  Phone,
  Mail,
  Share,
  Eye,
  Scan,
  MapPin,
  Headphones,
} from "lucide-react"

const mobileFeatures = [
  {
    id: "quick-upload",
    title: "Quick Upload",
    description: "Instant document upload from camera or gallery",
    icon: Camera,
    color: "bg-blue-500",
    usage: "1,247 uploads this month",
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp Integration",
    description: "Direct document sharing via WhatsApp",
    icon: MessageSquare,
    color: "bg-green-500",
    usage: "892 documents shared",
  },
  {
    id: "qr-scanner",
    title: "QR Code Scanner",
    description: "Scan QR codes for instant document access",
    icon: QrCode,
    color: "bg-purple-500",
    usage: "634 scans completed",
  },
  {
    id: "offline-mode",
    title: "Offline Access",
    description: "Access documents without internet connection",
    icon: Wifi,
    color: "bg-orange-500",
    usage: "423 offline sessions",
  },
]

const notifications = [
  {
    id: 1,
    type: "urgent",
    title: "Safety Protocol Update",
    message: "New safety guidelines require immediate review",
    timestamp: "2024-01-15T10:30:00Z",
    department: "Engineering",
    read: false,
    channel: "push",
  },
  {
    id: 2,
    type: "info",
    title: "Document Translated",
    message: "HR Policy Manual has been translated to Malayalam",
    timestamp: "2024-01-15T09:15:00Z",
    department: "HR",
    read: false,
    channel: "whatsapp",
  },
  {
    id: 3,
    type: "warning",
    title: "Contract Expiring Soon",
    message: "Vendor ABC Ltd contract expires in 7 days",
    timestamp: "2024-01-15T08:45:00Z",
    department: "Finance",
    read: true,
    channel: "email",
  },
  {
    id: 4,
    type: "success",
    title: "Compliance Check Passed",
    message: "All safety documents are up to date",
    timestamp: "2024-01-15T07:20:00Z",
    department: "Engineering",
    read: true,
    channel: "push",
  },
]

const fieldStaffTools = [
  {
    id: "ar-overlay",
    title: "AR Equipment Manuals",
    description: "Scan equipment to view maintenance manuals",
    icon: Scan,
    status: "coming-soon",
  },
  {
    id: "location-docs",
    title: "Location-Based Documents",
    description: "Access documents based on your current location",
    icon: MapPin,
    status: "active",
  },
  {
    id: "voice-notes",
    title: "Voice Documentation",
    description: "Record voice notes and convert to text",
    icon: Headphones,
    status: "active",
  },
  {
    id: "emergency-contacts",
    title: "Emergency Protocols",
    description: "Quick access to emergency procedures",
    icon: Phone,
    status: "active",
  },
]

export function MobileInterface() {
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null)

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "warning":
        return <Clock className="h-5 w-5 text-orange-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "info":
        return <Bell className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "warning":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">Warning</Badge>
      case "success":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Success</Badge>
      case "info":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Info</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        return <MessageSquare className="h-4 w-4 text-green-500" />
      case "email":
        return <Mail className="h-4 w-4 text-blue-500" />
      case "push":
        return <Smartphone className="h-4 w-4 text-purple-500" />
      default:
        return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mobile Interface & Notifications</h1>
          <p className="text-muted-foreground">Mobile-friendly access and real-time notification system</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download App
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Mobile App Preview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Mobile App Features
              </CardTitle>
              <CardDescription>Comprehensive mobile experience for field staff and remote access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {mobileFeatures.map((feature) => (
                  <div key={feature.id} className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${feature.color}`}>
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{feature.usage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Device Mockup */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-6">
              <div className="mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-4 py-2 text-xs text-white">
                      <div className="flex items-center gap-1">
                        <Signal className="h-3 w-3" />
                        <Wifi className="h-3 w-3" />
                      </div>
                      <div>9:41 AM</div>
                      <div className="flex items-center gap-1">
                        <span>100%</span>
                        <Battery className="h-3 w-3" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="bg-white text-black p-4 h-96">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg">DocuFlow</h3>
                          <div className="flex gap-2">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-xs text-white">3</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-blue-50 rounded-lg text-center">
                            <Camera className="h-6 w-6 mx-auto mb-1 text-blue-500" />
                            <p className="text-xs font-medium">Quick Upload</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg text-center">
                            <MessageSquare className="h-6 w-6 mx-auto mb-1 text-green-500" />
                            <p className="text-xs font-medium">WhatsApp</p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg text-center">
                            <QrCode className="h-6 w-6 mx-auto mb-1 text-purple-500" />
                            <p className="text-xs font-medium">QR Scanner</p>
                          </div>
                          <div className="p-3 bg-orange-50 rounded-lg text-center">
                            <Search className="h-6 w-6 mx-auto mb-1 text-orange-500" />
                            <p className="text-xs font-medium">AI Search</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">Safety Alert</p>
                              <p className="text-xs text-gray-600">New protocol update</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                            <Globe className="h-4 w-4 text-blue-500" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">Translation Complete</p>
                              <p className="text-xs text-gray-600">Document ready</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notification System */}
      <Tabs defaultValue="notifications" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="field-tools">Field Staff Tools</TabsTrigger>
          <TabsTrigger value="settings">Notification Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Real-Time Notifications
                  </CardTitle>
                  <CardDescription>Instant alerts via WhatsApp, email, and push notifications</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <CheckCircle className="h-4 w-4" />
                    Mark All Read
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Settings className="h-4 w-4" />
                    Configure
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 rounded-lg border transition-all cursor-pointer ${
                      !notification.read ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200" : "hover:shadow-sm"
                    }`}
                    onClick={() => setSelectedNotification(notification.id)}
                  >
                    <div className="p-2 rounded-lg bg-muted">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4
                            className={`font-semibold ${!notification.read ? "text-blue-900 dark:text-blue-100" : ""}`}
                          >
                            {notification.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getNotificationBadge(notification.type)}
                          {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{notification.department}</span>
                          <span>{new Date(notification.timestamp).toLocaleString()}</span>
                          <div className="flex items-center gap-1">
                            {getChannelIcon(notification.channel)}
                            <span className="capitalize">{notification.channel}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            View
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
        </TabsContent>

        <TabsContent value="field-tools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Field Staff Tools
              </CardTitle>
              <CardDescription>Specialized tools for maintenance and field operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {fieldStaffTools.map((tool) => (
                  <div key={tool.id} className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <tool.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{tool.title}</h4>
                          {tool.status === "coming-soon" ? (
                            <Badge variant="outline" className="text-xs">
                              Coming Soon
                            </Badge>
                          ) : (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs">
                              Active
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                        <div className="mt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 bg-transparent"
                            disabled={tool.status === "coming-soon"}
                          >
                            {tool.status === "coming-soon" ? (
                              <>
                                <Clock className="h-4 w-4" />
                                Coming Soon
                              </>
                            ) : (
                              <>
                                <Zap className="h-4 w-4" />
                                Launch Tool
                              </>
                            )}
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

        <TabsContent value="settings" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Notifications
                </CardTitle>
                <CardDescription>Configure WhatsApp alert preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Urgent Alerts</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Document Updates</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Translation Complete</span>
                  <Badge variant="outline">Disabled</Badge>
                </div>
                <Button className="w-full gap-2">
                  <Settings className="h-4 w-4" />
                  Configure WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Notifications
                </CardTitle>
                <CardDescription>Configure email alert preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Daily Digest</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Compliance Alerts</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Weekly Reports</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Enabled</Badge>
                </div>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Settings className="h-4 w-4" />
                  Configure Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
