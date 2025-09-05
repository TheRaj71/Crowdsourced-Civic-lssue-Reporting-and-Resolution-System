import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award } from "lucide-react"

const topContributors = [
  {
    name: "Rajesh Kumar",
    role: "Field Inspector",
    avatar: "/indian-male-inspector.jpg",
    issues: 156,
    resolved: 134,
    rating: 4.8,
  },
  {
    name: "Priya Sharma",
    role: "Community Volunteer",
    avatar: "/indian-female-volunteer.jpg",
    issues: 89,
    resolved: 76,
    rating: 4.6,
  },
  {
    name: "Amit Singh",
    role: "Ward Officer",
    avatar: "/indian-male-officer.jpg",
    issues: 234,
    resolved: 198,
    rating: 4.9,
  },
]

const activeTeams = [
  { name: "Road Maintenance Team", members: 12, active: 8, status: "active" },
  { name: "Waste Management Unit", members: 15, active: 12, status: "active" },
  { name: "Water Supply Team", members: 8, active: 6, status: "busy" },
  { name: "Public Works Department", members: 20, active: 14, status: "active" },
]

export function TeamsSection() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">Teams & Contributors</CardTitle>
        <Button variant="outline" size="sm">
          <Users className="w-4 h-4 mr-2" />
          Manage Teams
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Top Contributors</h4>
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div key={contributor.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                      <AvatarFallback>
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {index === 0 && <Award className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{contributor.name}</div>
                    <div className="text-sm text-gray-500">{contributor.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {contributor.resolved}/{contributor.issues}
                  </div>
                  <div className="text-xs text-gray-500">⭐ {contributor.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Active Teams</h4>
          <div className="space-y-2">
            {activeTeams.map((team) => (
              <div key={team.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{team.name}</div>
                    <div className="text-xs text-gray-500">
                      {team.active}/{team.members} members active
                    </div>
                  </div>
                </div>
                <Badge variant={team.status === "active" ? "default" : "secondary"} className="text-xs">
                  {team.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
