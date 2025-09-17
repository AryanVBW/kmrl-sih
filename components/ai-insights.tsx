"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Search,
  Zap,
  Globe,
  FileText,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Target,
  Clock,
  AlertTriangle,
  Sparkles,
  Languages,
  Share,
  RefreshCw,
} from "lucide-react"

const aiInsights = [
  {
    id: 1,
    type: "summary",
    title: "Safety Protocol Analysis",
    content:
      "Recent safety documents show 23% increase in equipment maintenance protocols. Key changes include new emergency procedures for Line 2 and updated PPE requirements.",
    confidence: 94,
    documents: 12,
    department: "Engineering",
    timestamp: "2024-01-15T10:30:00Z",
    tags: ["safety", "maintenance", "emergency"],
  },
  {
    id: 2,
    type: "trend",
    title: "HR Policy Updates Trending",
    content:
      "HR department has uploaded 45% more policy documents this month. Focus areas include remote work guidelines and employee wellness programs.",
    confidence: 87,
    documents: 28,
    department: "HR",
    timestamp: "2024-01-15T09:15:00Z",
    tags: ["hr", "policy", "wellness"],
  },
  {
    id: 3,
    type: "alert",
    title: "Contract Expiration Alert",
    content:
      "AI detected 8 vendor contracts expiring within 60 days. Finance team should review renewal terms for critical service providers.",
    confidence: 96,
    documents: 8,
    department: "Finance",
    timestamp: "2024-01-15T08:45:00Z",
    tags: ["contracts", "finance", "urgent"],
  },
]

const searchSuggestions = [
  "Show me all safety circulars from August",
  "Find documents about employee benefits",
  "List all vendor contracts expiring this quarter",
  "Search for maintenance reports from Line 1",
  "Show translated documents in Malayalam",
]

const translationStats = [
  { language: "Malayalam", count: 1247, percentage: 45 },
  { language: "Hindi", count: 892, percentage: 32 },
  { language: "Tamil", count: 634, percentage: 23 },
]

export function AIInsights() {
  const [searchQuery, setSearchQuery] = useState("")
  const [aiQuery, setAiQuery] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAISearch = () => {
    setIsProcessing(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
    }, 2000)
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "summary":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "trend":
        return <TrendingUp className="h-5 w-5 text-green-500" />
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
      default:
        return <Lightbulb className="h-5 w-5 text-purple-500" />
    }
  }

  const getInsightBadge = (type: string) => {
    switch (type) {
      case "summary":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Summary</Badge>
      case "trend":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Trend</Badge>
      case "alert":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">Alert</Badge>
      default:
        return <Badge variant="secondary">Insight</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Insights & Search</h1>
          <p className="text-muted-foreground">Intelligent analysis and smart search across your document ecosystem</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Report
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <RefreshCw className="h-4 w-4" />
            Refresh Insights
          </Button>
        </div>
      </div>

      {/* AI Search Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Powered Smart Search
          </CardTitle>
          <CardDescription>
            Ask questions in natural language and get intelligent answers from your documents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Ask me anything about your documents..."
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleAISearch} disabled={isProcessing} className="gap-2">
              {isProcessing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
              {isProcessing ? "Processing..." : "Ask AI"}
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Try these suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {searchSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent"
                  onClick={() => setAiQuery(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Dashboard */}
      <Tabs defaultValue="insights" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="translation">Translation Hub</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="chat">AI Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Documents Processed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,924</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+15.3%</span> this week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  AI Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">Average confidence score</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Processing Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3s</div>
                <p className="text-xs text-muted-foreground">Average per document</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {aiInsights.map((insight) => (
              <Card key={insight.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-muted">{getInsightIcon(insight.type)}</div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{insight.title}</h3>
                          <p className="text-muted-foreground mt-1">{insight.content}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getInsightBadge(insight.type)}
                          <Badge variant="outline" className="text-xs">
                            {insight.confidence}% confidence
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {insight.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>{insight.department}</span>
                          <span>{insight.documents} documents analyzed</span>
                          <span>{new Date(insight.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <FileText className="h-4 w-4" />
                            View Details
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
          </div>
        </TabsContent>

        <TabsContent value="translation" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Translation Statistics
                </CardTitle>
                <CardDescription>Document translation breakdown by language</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {translationStats.map((stat) => (
                  <div key={stat.language} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Languages className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{stat.language}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{stat.count.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{stat.percentage}%</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Quick Translate
                </CardTitle>
                <CardDescription>Translate documents instantly with AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Document</label>
                  <Input placeholder="Choose document to translate..." />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">From</label>
                    <Input placeholder="English" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">To</label>
                    <Input placeholder="Malayalam" />
                  </div>
                </div>
                <Button className="w-full gap-2">
                  <Globe className="h-4 w-4" />
                  Start Translation
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Total Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+8.2%</span> from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">AI Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,421</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+23.1%</span> from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96.8%</div>
                <p className="text-xs text-muted-foreground">Query satisfaction</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2s</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">-0.3s</span> improvement
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Search Analytics
              </CardTitle>
              <CardDescription>Most popular search queries and document types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-3">Top Search Queries</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Safety protocols</span>
                        <span className="text-muted-foreground">1,247 searches</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>HR policies</span>
                        <span className="text-muted-foreground">892 searches</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Vendor contracts</span>
                        <span className="text-muted-foreground">634 searches</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Document Types</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>PDF Documents</span>
                        <span className="text-muted-foreground">67%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Word Documents</span>
                        <span className="text-muted-foreground">23%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Images/Scans</span>
                        <span className="text-muted-foreground">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                AI Assistant Chat
              </CardTitle>
              <CardDescription>Have a conversation with your document AI assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-96 border rounded-lg p-4 bg-muted/20 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-full bg-primary">
                      <Brain className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-background rounded-lg p-3 shadow-sm">
                        <p className="text-sm">
                          Hello! I'm your AI document assistant. I can help you find information, summarize documents,
                          translate content, and provide insights. What would you like to know?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Type your message here..."
                  className="flex-1 min-h-[60px] resize-none"
                  rows={2}
                />
                <Button className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
