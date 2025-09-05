"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { OverviewCards } from "@/components/overview-cards"
import { RecentReports } from "@/components/recent-reports"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { MapSection } from "@/components/map-section"
import { TeamsSection } from "@/components/teams-section"
import { ReportedIssuesPage } from "@/components/reported-issues-page"
import { VerifyIssuesPage } from "@/components/verify-issues-page"
import { ResolvedCasesPage } from "@/components/resolved-cases-page"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("/")

  const handleNavigation = (href: string) => {
    setCurrentPage(href)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "/issues":
        return <ReportedIssuesPage />
      case "/verify":
        return <VerifyIssuesPage />
      case "/resolved":
        return <ResolvedCasesPage />
      default:
        return (
          <main className="flex-1 p-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Public Works Department</h1>
              <p className="text-muted-foreground">Monitor and manage civic issues across your jurisdiction</p>
            </div>

            <OverviewCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentReports />
              <AnalyticsCharts />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MapSection />
              <TeamsSection />
            </div>
          </main>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <DashboardSidebar onNavigate={handleNavigation} currentPage={currentPage} />
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader />
        {renderCurrentPage()}
      </div>
    </div>
  )
}
