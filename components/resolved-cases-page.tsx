"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, MapPin, Clock, User, Search, Eye, Star, Calendar, DollarSign } from "lucide-react"

const resolvedCases = [
  {
    id: "RES-2024-001",
    originalId: "RPT-2023-156",
    title: "Pothole repair on Central Avenue",
    description: "Large pothole causing vehicle damage repaired successfully",
    category: "Road Infrastructure",
    location: "Central Avenue, Block A",
    reportedBy: "Multiple Citizens",
    resolvedBy: "Road Maintenance Team B",
    reportedAt: "2023-12-20",
    resolvedAt: "2024-01-10",
    resolutionTime: "21 days",
    actualCost: "₹18,500",
    estimatedCost: "₹15,000",
    satisfactionRating: 4.8,
    citizenFeedback: "Excellent work! The road is now smooth and safe for vehicles.",
    beforeImages: 3,
    afterImages: 4,
    teamMembers: ["Rajesh Singh", "Amit Kumar", "Suresh Patel"],
    materials: ["Asphalt mix", "Road marking paint", "Safety cones"],
    completionNotes:
      "Pothole filled with high-quality asphalt mix. Road markings restored. Area monitored for 48 hours post-completion.",
  },
  {
    id: "RES-2024-002",
    originalId: "RPT-2023-189",
    title: "Street lighting restoration",
    description: "Restored 12 non-functional street lights on Park Road",
    category: "Public Lighting",
    location: "Park Road, Sector 15",
    reportedBy: "Residents Association",
    resolvedBy: "Electrical Team Alpha",
    reportedAt: "2023-12-28",
    resolvedAt: "2024-01-08",
    resolutionTime: "11 days",
    actualCost: "₹32,000",
    estimatedCost: "₹28,000",
    satisfactionRating: 4.9,
    citizenFeedback: "Great job! The street is now well-lit and safe for evening walks.",
    beforeImages: 2,
    afterImages: 5,
    teamMembers: ["Electrician Ravi", "Helper Mohan", "Supervisor Prakash"],
    materials: ["LED bulbs", "Electrical cables", "Junction boxes"],
    completionNotes:
      "All 12 street lights restored with energy-efficient LED bulbs. Electrical connections upgraded for better reliability.",
  },
  {
    id: "RES-2024-003",
    originalId: "RPT-2024-001",
    title: "Garbage collection point cleanup",
    description: "Cleaned and organized overflowing garbage collection area",
    category: "Waste Management",
    location: "Green Valley Society",
    reportedBy: "Society Secretary",
    resolvedBy: "Sanitation Team C",
    reportedAt: "2024-01-05",
    resolvedAt: "2024-01-12",
    resolutionTime: "7 days",
    actualCost: "₹12,000",
    estimatedCost: "₹10,000",
    satisfactionRating: 4.6,
    citizenFeedback: "Much better now. Regular collection schedule is being followed.",
    beforeImages: 4,
    afterImages: 3,
    teamMembers: ["Cleaner Ramesh", "Driver Sunil", "Supervisor Meera"],
    materials: ["New garbage bins", "Cleaning supplies", "Disinfectants"],
    completionNotes:
      "Area thoroughly cleaned and sanitized. New larger capacity bins installed. Collection schedule optimized.",
  },
  {
    id: "RES-2024-004",
    originalId: "RPT-2023-201",
    title: "Park equipment maintenance",
    description: "Repaired and maintained children's playground equipment",
    category: "Parks & Recreation",
    location: "Children's Park, Sector 8",
    reportedBy: "Parent Committee",
    resolvedBy: "Parks Maintenance Unit",
    reportedAt: "2023-12-15",
    resolvedAt: "2024-01-05",
    resolutionTime: "21 days",
    actualCost: "₹15,500",
    estimatedCost: "₹12,000",
    satisfactionRating: 4.7,
    citizenFeedback: "Kids are happy to play safely again. Thank you for the quick response!",
    beforeImages: 3,
    afterImages: 6,
    teamMembers: ["Maintenance Head Suresh", "Welder Rajesh", "Painter Anil"],
    materials: ["Steel pipes", "Safety padding", "Weather-resistant paint"],
    completionNotes:
      "All playground equipment inspected and repaired. Safety padding replaced. Equipment painted with weather-resistant coating.",
  },
]

export function ResolvedCasesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all")

  const filteredCases = resolvedCases.filter((case_) => {
    const matchesSearch =
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || case_.category === categoryFilter
    const matchesRating =
      ratingFilter === "all" ||
      (ratingFilter === "high" && case_.satisfactionRating >= 4.5) ||
      (ratingFilter === "medium" && case_.satisfactionRating >= 3.5 && case_.satisfactionRating < 4.5) ||
      (ratingFilter === "low" && case_.satisfactionRating < 3.5)

    return matchesSearch && matchesCategory && matchesRating
  })

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-600"
    if (rating >= 3.5) return "text-yellow-600"
    return "text-red-600"
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const calculateBudgetVariance = (actualCost: string, estimatedCost: string) => {
    const actual = Number.parseFloat(actualCost.replace("₹", "").replace(",", ""))
    const estimated = Number.parseFloat(estimatedCost.replace("₹", "").replace(",", ""))
    const variance = (((actual - estimated) / estimated) * 100).toFixed(1)
    return `${variance}%`
  }

  return (
    <main className="flex-1 p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Resolved Cases</h1>
        <p className="text-muted-foreground">Track completed civic issues and citizen satisfaction</p>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Resolved</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <p className="text-2xl font-bold text-green-600">4.7</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Resolution</p>
                <p className="text-2xl font-bold text-blue-600">14 days</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold text-purple-600">₹2.4L</p>
              </div>
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resolved cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Road Infrastructure">Road Infrastructure</SelectItem>
                <SelectItem value="Public Lighting">Public Lighting</SelectItem>
                <SelectItem value="Waste Management">Waste Management</SelectItem>
                <SelectItem value="Parks & Recreation">Parks & Recreation</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="high">High (4.5+)</SelectItem>
                <SelectItem value="medium">Medium (3.5-4.4)</SelectItem>
                <SelectItem value="low">Low (below 3.5)</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("all")
                setRatingFilter("all")
                setTimeFilter("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resolved Cases List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Resolved Cases ({filteredCases.length})</h2>

        <div className="space-y-4">
          {filteredCases.map((case_) => (
            <Card key={case_.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <h3 className="font-semibold text-lg">{case_.title}</h3>
                        <Badge variant="outline">{case_.category}</Badge>
                      </div>
                      <p className="text-muted-foreground">{case_.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">{renderStars(case_.satisfactionRating)}</div>
                      <span className={`font-semibold ${getRatingColor(case_.satisfactionRating)}`}>
                        {case_.satisfactionRating}
                      </span>
                    </div>
                  </div>

                  {/* Timeline & Cost */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Reported: {case_.reportedAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                      <span>Resolved: {case_.resolvedAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {case_.resolutionTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span>Cost: {case_.actualCost}</span>
                    </div>
                  </div>

                  {/* Location & Team */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{case_.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span>Team: {case_.resolvedBy}</span>
                    </div>
                  </div>

                  {/* Citizen Feedback */}
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-800">Citizen Feedback</h4>
                    <p className="text-sm text-green-700 italic">"{case_.citizenFeedback}"</p>
                  </div>

                  {/* Completion Details */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Completion Notes</h4>
                    <p className="text-sm text-muted-foreground mb-3">{case_.completionNotes}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Team Members: </span>
                        <span>{case_.teamMembers.join(", ")}</span>
                      </div>
                      <div>
                        <span className="font-medium">Materials Used: </span>
                        <span>{case_.materials.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{case_.beforeImages} before images</span>
                      <span>•</span>
                      <span>{case_.afterImages} after images</span>
                      <span>•</span>
                      <span>Budget variance: {calculateBudgetVariance(case_.actualCost, case_.estimatedCost)}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        Generate Report
                      </Button>
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
