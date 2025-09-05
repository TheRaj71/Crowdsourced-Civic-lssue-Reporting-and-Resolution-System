"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Filter, Building2, Users } from "lucide-react"

const recentReports = [
  {
    id: "RPT-001",
    title: "Major pothole causing traffic disruption",
    category: "Road Infrastructure",
    location: "MG Road, Sector 14",
    status: "verified",
    priority: "high",
    date: "2024-01-15",
    reporter: "Municipal Corporation",
    source: "government",
    department: "Public Works Department",
  },
  {
    id: "RPT-002",
    title: "Garbage accumulation near market",
    category: "Waste Management",
    location: "City Market, Ward 7",
    status: "pending",
    priority: "medium",
    date: "2024-01-14",
    reporter: "Priya Sharma",
    source: "public",
    department: "Sanitation Department",
  },
  {
    id: "RPT-003",
    title: "Water supply disruption in residential area",
    category: "Water Supply",
    location: "Residential Area, Block C",
    status: "resolved",
    priority: "high",
    date: "2024-01-13",
    reporter: "Water Board",
    source: "government",
    department: "Water Supply Department",
  },
  {
    id: "RPT-004",
    title: "Street light not working near school",
    category: "Public Lighting",
    location: "Park Street, Near School",
    status: "in-progress",
    priority: "low",
    date: "2024-01-12",
    reporter: "Sunita Devi",
    source: "public",
    department: "Electrical Department",
  },
  {
    id: "RPT-005",
    title: "Drainage blockage causing waterlogging",
    category: "Drainage",
    location: "Main Street, Ward 3",
    status: "pending",
    priority: "high",
    date: "2024-01-11",
    reporter: "District Collector Office",
    source: "government",
    department: "Public Works Department",
  },
]

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  verified: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "in-progress": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
}

const priorityColors = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export function RecentReports() {
  const [sourceFilter, setSourceFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredReports = recentReports.filter((report) => {
    const matchesSource = sourceFilter === "all" || report.source === sourceFilter
    const matchesStatus = statusFilter === "all" || report.status === statusFilter
    return matchesSource && matchesStatus
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Reports</CardTitle>
        <div className="flex items-center space-x-2">
          <Select value={sourceFilter} onValueChange={setSourceFilter}>
            <SelectTrigger className="w-32">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="public">Public</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {filteredReports.map((report) => (
          <div key={report.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium">{report.title}</h4>
                  <Badge variant={report.source === "government" ? "default" : "secondary"} className="text-xs">
                    {report.source === "government" ? (
                      <>
                        <Building2 className="w-3 h-3 mr-1" />
                        Gov
                      </>
                    ) : (
                      <>
                        <Users className="w-3 h-3 mr-1" />
                        Public
                      </>
                    )}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {report.category} • {report.department}
                </p>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {report.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {report.date}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <Badge className={statusColors[report.status as keyof typeof statusColors]}>{report.status}</Badge>
                <Badge variant="outline" className={priorityColors[report.priority as keyof typeof priorityColors]}>
                  {report.priority}
                </Badge>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Reported by: {report.reporter} • ID: {report.id}
            </div>
          </div>
        ))}

        {filteredReports.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">No reports found matching the selected filters.</div>
        )}
      </CardContent>
    </Card>
  )
}
