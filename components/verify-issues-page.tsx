"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, MapPin, Clock, User, Search, Eye, MessageSquare } from "lucide-react"

const verifiedIssues = [
  {
    id: "VER-2024-001",
    originalId: "RPT-2024-001",
    title: "Large pothole on MG Road",
    description: "Deep pothole causing traffic disruption and vehicle damage near City Mall junction",
    category: "Road Infrastructure",
    priority: "High",
    location: "MG Road, Sector 14",
    reportedBy: "Rajesh Kumar",
    verifiedBy: "Inspector Amit Singh",
    verifiedAt: "2024-01-15 02:30 PM",
    verificationNotes:
      "Verified on-site. Pothole is 2 feet deep and 4 feet wide. Immediate repair required to prevent accidents.",
    status: "Verified - Approved",
    estimatedCost: "₹15,000",
    estimatedTime: "2-3 days",
    assignedTeam: "Road Maintenance Team A",
    images: 5,
    evidencePhotos: 3,
  },
  {
    id: "VER-2024-002",
    originalId: "RPT-2024-003",
    title: "Street light not working",
    description: "Multiple street lights not functioning on main road, safety concern during night",
    category: "Public Lighting",
    priority: "High",
    location: "Park Street",
    reportedBy: "Priya Sharma",
    verifiedBy: "Electrician Ravi Kumar",
    verifiedAt: "2024-01-15 06:45 PM",
    verificationNotes:
      "Confirmed 8 street lights are non-functional. Issue is with main electrical connection. Safety hazard confirmed.",
    status: "Verified - Approved",
    estimatedCost: "₹25,000",
    estimatedTime: "1-2 days",
    assignedTeam: "Electrical Maintenance Unit",
    images: 4,
    evidencePhotos: 6,
  },
  {
    id: "VER-2024-003",
    originalId: "RPT-2024-005",
    title: "Illegal construction blocking drainage",
    description: "Unauthorized construction blocking natural water flow in residential area",
    category: "Building Violations",
    priority: "Medium",
    location: "Shanti Nagar, Block C",
    reportedBy: "Residents Association",
    verifiedBy: "Building Inspector Meera Joshi",
    verifiedAt: "2024-01-15 11:20 AM",
    verificationNotes:
      "Construction is indeed unauthorized and blocking drainage. Legal action required along with demolition.",
    status: "Verified - Legal Action Required",
    estimatedCost: "₹50,000",
    estimatedTime: "7-10 days",
    assignedTeam: "Legal & Enforcement Team",
    images: 3,
    evidencePhotos: 8,
  },
  {
    id: "VER-2024-004",
    originalId: "RPT-2024-006",
    title: "Park maintenance required",
    description: "Children's park equipment damaged and needs immediate attention",
    category: "Parks & Recreation",
    priority: "Low",
    location: "Central Park, Sector 12",
    reportedBy: "Parent Committee",
    verifiedBy: "Parks Officer Suresh Patel",
    verifiedAt: "2024-01-15 03:15 PM",
    verificationNotes:
      "Minor damage to swings and slides. Regular maintenance can resolve the issues. Not urgent but should be addressed.",
    status: "Verified - Scheduled",
    estimatedCost: "₹8,000",
    estimatedTime: "1 day",
    assignedTeam: "Parks Maintenance Team",
    images: 2,
    evidencePhotos: 4,
  },
]

export function VerifyIssuesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredIssues = verifiedIssues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || issue.status.toLowerCase().includes(statusFilter)
    const matchesPriority = priorityFilter === "all" || issue.priority.toLowerCase() === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    if (status.includes("Approved")) return "default"
    if (status.includes("Legal Action")) return "destructive"
    if (status.includes("Scheduled")) return "secondary"
    return "outline"
  }

  const getStatusIcon = (status: string) => {
    if (status.includes("Approved")) return <CheckCircle className="w-4 h-4" />
    if (status.includes("Legal Action")) return <XCircle className="w-4 h-4" />
    return <CheckCircle className="w-4 h-4" />
  }

  return (
    <main className="flex-1 p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Verified Issues</h1>
        <p className="text-muted-foreground">Review and manage issues that have been verified by field inspectors</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Verified</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold text-green-600">18</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Legal Action</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-2xl font-bold text-blue-600">3</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search verified issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="legal">Legal Action Required</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("all")
                setPriorityFilter("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Verified Issues List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Verified Issues ({filteredIssues.length})</h2>

        <div className="space-y-4">
          {filteredIssues.map((issue) => (
            <Card key={issue.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{issue.title}</h3>
                        <Badge variant={getStatusColor(issue.status)} className="flex items-center gap-1">
                          {getStatusIcon(issue.status)}
                          {issue.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{issue.description}</p>
                    </div>
                    <Badge variant="outline">{issue.priority} Priority</Badge>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{issue.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span>Reported by: {issue.reportedBy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-muted-foreground" />
                      <span>Verified by: {issue.verifiedBy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Verified: {issue.verifiedAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Est. Cost:</span>
                      <span className="font-medium">{issue.estimatedCost}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Est. Time:</span>
                      <span className="font-medium">{issue.estimatedTime}</span>
                    </div>
                  </div>

                  {/* Verification Notes */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Verification Notes
                    </h4>
                    <p className="text-sm text-muted-foreground">{issue.verificationNotes}</p>
                  </div>

                  {/* Assignment & Actions */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">Assigned to:</span>
                      <span className="font-medium">{issue.assignedTeam}</span>
                      <span className="text-muted-foreground">•</span>
                      <span>{issue.images} original images</span>
                      <span className="text-muted-foreground">•</span>
                      <span>{issue.evidencePhotos} evidence photos</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View Evidence
                      </Button>
                      <Button size="sm">Proceed to Resolution</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
