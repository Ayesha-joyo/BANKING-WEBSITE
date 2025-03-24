"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, BarChart3, ArrowLeftRight, Receipt, Clock, Settings } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"

interface SidebarNavProps {
  setOpen?: (open: boolean) => void
}

export function SidebarNav({ setOpen }: SidebarNavProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      icon: BarChart3,
      title: "Dashboard",
    },
    {
      href: "/accounts",
      icon: CreditCard,
      title: "Accounts",
    },
    {
      href: "/transfer",
      icon: ArrowLeftRight,
      title: "Transfer",
    },
    {
      href: "/bills",
      icon: Receipt,
      title: "Bill Payments",
    },
    {
      href: "/transactions",
      icon: Clock,
      title: "Transactions",
    },
    {
      href: "/settings",
      icon: Settings,
      title: "Settings",
    },
  ]

  return (
    <nav className="grid items-start px-2 py-4">
      {routes.map((route) => {
        const Icon = route.icon
        return (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn("justify-start", pathname === route.href && "bg-muted font-medium")}
            asChild
            onClick={() => {
              if (setOpen) setOpen(false)
            }}
          >
            <Link href={route.href}>
              <Icon className="mr-2 h-4 w-4" />
              {route.title}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

