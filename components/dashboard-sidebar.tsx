"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Home,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Shield,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Reported Issues", href: "/issues", icon: AlertTriangle },
  { name: "Verify Issues", href: "/verify", icon: FileCheck },
  { name: "Resolved Cases", href: "/resolved", icon: CheckCircle },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Department Team", href: "/teams", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

const headOnlyNavigation = [
  { name: "Add Junior Officer", href: "/add-officer", icon: UserPlus },
  { name: "Department Admin", href: "/admin", icon: Shield },
]

interface DashboardSidebarProps {
  onNavigate?: (href: string) => void
  currentPage?: string // Add currentPage prop to track active state
}

export function DashboardSidebar({ onNavigate, currentPage = "/" }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const isHead = true // This would be determined by user role

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen bg-background border-r flex flex-col transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">CivicResolve</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="p-1 h-8 w-8">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.href
          return (
            <Button
              key={item.name}
              variant={isActive ? "default" : "ghost"}
              className={cn("w-full justify-start", collapsed && "px-2")}
              onClick={() => onNavigate?.(item.href)}
            >
              <Icon className={cn("w-4 h-4", !collapsed && "mr-3")} />
              {!collapsed && item.name}
            </Button>
          )
        })}

        {isHead && (
          <>
            <div className="pt-4 pb-2">
              {!collapsed && (
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2">
                  Head Privileges
                </p>
              )}
            </div>
            {headOnlyNavigation.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-muted-foreground hover:text-foreground",
                    collapsed && "px-2",
                  )}
                  onClick={() => onNavigate?.(item.href)}
                >
                  <Icon className={cn("w-4 h-4", !collapsed && "mr-3")} />
                  {!collapsed && item.name}
                </Button>
              )
            })}
          </>
        )}
      </nav>
    </div>
  )
}
