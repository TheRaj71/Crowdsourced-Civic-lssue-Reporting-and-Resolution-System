"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"

const categoryData = [
  { name: "Road Infrastructure", issues: 456, resolved: 234, pending: 156, inProgress: 66 },
  { name: "Waste Management", issues: 389, resolved: 298, pending: 67, inProgress: 24 },
  { name: "Water Supply", issues: 267, resolved: 189, pending: 45, inProgress: 33 },
  { name: "Public Lighting", issues: 234, resolved: 201, pending: 23, inProgress: 10 },
  { name: "Drainage", issues: 198, resolved: 145, pending: 34, inProgress: 19 },
  { name: "Public Transport", issues: 156, resolved: 98, pending: 45, inProgress: 13 },
]

const monthlyTrends = [
  { month: "Jul", reported: 234, resolved: 189, verified: 201 },
  { month: "Aug", reported: 267, resolved: 234, verified: 245 },
  { month: "Sep", reported: 298, resolved: 267, verified: 278 },
  { month: "Oct", reported: 345, resolved: 298, verified: 312 },
  { month: "Nov", reported: 389, resolved: 345, verified: 356 },
  { month: "Dec", reported: 456, resolved: 389, verified: 401 },
]

const departmentData = [
  { name: "Public Works", value: 456, color: "hsl(var(--chart-1))" },
  { name: "Sanitation", value: 389, color: "hsl(var(--chart-2))" },
  { name: "Water Supply", value: 267, color: "hsl(var(--chart-3))" },
  { name: "Electrical", value: 234, color: "hsl(var(--chart-4))" },
  { name: "Transport", value: 156, color: "hsl(var(--chart-5))" },
]

const resolutionTimeData = [
  { category: "Road Infrastructure", avgDays: 12, target: 10 },
  { category: "Waste Management", avgDays: 3, target: 2 },
  { category: "Water Supply", avgDays: 8, target: 6 },
  { category: "Public Lighting", avgDays: 5, target: 4 },
  { category: "Drainage", avgDays: 15, target: 12 },
]

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Issue Analytics Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Issues by Category</h4>
            <ChartContainer
              config={{
                issues: { label: "Total Issues", color: "hsl(var(--chart-1))" },
                resolved: { label: "Resolved", color: "hsl(var(--chart-2))" },
                pending: { label: "Pending", color: "hsl(var(--chart-3))" },
                inProgress: { label: "In Progress", color: "hsl(var(--chart-4))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    className="text-muted-foreground"
                  />
                  <YAxis tick={{ fontSize: 12 }} className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="resolved" fill="var(--color-resolved)" name="Resolved" />
                  <Bar dataKey="inProgress" fill="var(--color-inProgress)" name="In Progress" />
                  <Bar dataKey="pending" fill="var(--color-pending)" name="Pending" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                reported: { label: "Reported", color: "hsl(var(--chart-1))" },
                verified: { label: "Verified", color: "hsl(var(--chart-2))" },
                resolved: { label: "Resolved", color: "hsl(var(--chart-3))" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="reported"
                    stackId="1"
                    stroke="var(--color-reported)"
                    fill="var(--color-reported)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="verified"
                    stackId="2"
                    stroke="var(--color-verified)"
                    fill="var(--color-verified)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="resolved"
                    stackId="3"
                    stroke="var(--color-resolved)"
                    fill="var(--color-resolved)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: { label: "Issues" },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Average Resolution Time vs Target</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              avgDays: { label: "Actual Days", color: "hsl(var(--chart-1))" },
              target: { label: "Target Days", color: "hsl(var(--chart-2))" },
            }}
            className="h-[250px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resolutionTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="category"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  className="text-muted-foreground"
                />
                <YAxis tick={{ fontSize: 12 }} className="text-muted-foreground" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="target" fill="var(--color-target)" name="Target Days" opacity={0.7} />
                <Bar dataKey="avgDays" fill="var(--color-avgDays)" name="Actual Days" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
