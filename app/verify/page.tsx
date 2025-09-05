"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, CheckCircle, Clock, Eye, MessageSquare } from "lucide-react"

const verifiedIssues = [
  {
    id: "VER-001",
    originalId: "RPT-001",
    title: "Major pothole causing traffic disruption",
    category: "Road Infrastructure",
    location: "MG Road, Sector 14",
    priority: "high",
    reportedDate: "2024-01-15",
    verifiedDate: "2024-01-16",
    verifiedBy: "Inspector Rajesh Kumar",
    status: "verified",
    description:
      "Large pothole approximately 2 feet wide and 8 inches deep causing significant traffic disruption during peak hours.",
    verificationNotes: "Verified on-site. Immediate repair required due to safety concerns.",
    images: 3,
    department: "Public Works Department",
  },
  {
    id: "VER-002",
    originalId: "RPT-003",
    title: "Water supply disruption in residential area",
    category: "Water Supply",
    location: "Residential Area, Block C",
    priority: "high",
    reportedDate: "2024-01-13",
    verifiedDate: "2024-01-14",
    verifiedBy: "Engineer Priya Sharma",
    status: "action-required",
    description: "Complete water supply disruption affecting 200+ households in Block C residential area.",
    verificationNotes: "Main pipeline burst confirmed. Requires immediate repair team deployment.",
    images: 5,
    department: "Water Supply Department",
  },
  {
    id: "VER-003",
    originalId: "RPT-007",
    title: "Illegal waste dumping near school",
    category: "Waste Management",
    location: "Behind Government School, Ward 5",
    priority: "medium",
    reportedDate: "2024-01-10",
    verifiedDate: "2024-01-12",
    verifiedBy: "Sanitation Officer Amit Singh",
    status: "resolved",
    description: "Large pile of construction waste dumped illegally behind government school premises.",
    verificationNotes: "Waste removed and area cleaned. Warning notice issued to nearby construction sites.",
    images: 4,
    department: "Sanitation Department",
  },
]

const statusColors = {
  verified: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "action-required": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
}

const priorityColors = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export default function VerifyIssuesPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)

  const filteredIssues = verifiedIssues.filter((issue) => statusFilter === "all" || issue.status === statusFilter)

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Verify Issues</h1>
              <p className="text-muted-foreground">Review and manage verified civic issues</p>
            </div>

            <div className="flex items-center space-x-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="action-required">Action Required</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Verified Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {verifiedIssues.filter((i) => i.status === "verified").length}
                </div>
                <p className="text-sm text-muted-foreground">Ready for action</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-600" />
                  Action Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {verifiedIssues.filter((i) => i.status === "action-required").length}
                </div>
                <p className="text-sm text-muted-foreground">Needs immediate attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Resolved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {verifiedIssues.filter((i) => i.status === "resolved").length}
                </div>
                <p className="text-sm text-muted-foreground">Successfully completed</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Verified Issues List</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredIssues.map((issue) => (
                <div key={issue.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{issue.title}</h4>
                        <Badge className={statusColors[issue.status as keyof typeof statusColors]}>
                          {issue.status.replace("-", " ")}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={priorityColors[issue.priority as keyof typeof priorityColors]}
                        >
                          {issue.priority}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">
                        {issue.category} • {issue.department}
                      </p>

                      <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {issue.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          Verified: {issue.verifiedDate}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {issue.images} images
                        </div>
                      </div>

                      <p className="text-sm mb-2">{issue.description}</p>

                      <div className="bg-muted/50 p-3 rounded-md">
                        <div className="flex items-start space-x-2">
                          <MessageSquare className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Verification Notes:</p>
                            <p className="text-sm text-muted-foreground">{issue.verificationNotes}</p>
                            <p className="text-xs text-muted-foreground mt-1">Verified by: {issue.verifiedBy}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {issue.status === "verified" && <Button size="sm">Assign Team</Button>}
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Original Report: {issue.originalId} • Verified ID: {issue.id}
                  </div>
                </div>
              ))}

              {filteredIssues.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No verified issues found matching the selected filter.
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
