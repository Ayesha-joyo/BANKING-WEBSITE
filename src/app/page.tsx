import { redirect } from "next/navigation"
import { DollarSign } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Overview } from "../../components/overview"
import { RecentTransactions } from "../../components/recent-transactions"
import { AccountSummary } from "../../components/account-summary"
import { QuickActions } from "../../components/quick-actions"

export default function Dashboard() {
  // In a real app, you would check authentication here
  // and redirect to login if not authenticated
  const isAuthenticated = true

  if (!isAuthenticated) {
    redirect("/login")
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button size="sm">
              <DollarSign className="mr-2 h-4 w-4" />
              Add Money
            </Button>
          </div>
        </div>
        <AccountSummary />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Your spending and income for the past 30 days.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used banking services.</CardDescription>
            </CardHeader>
            <CardContent>
              <QuickActions />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your recent account activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTransactions />
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="/transactions">View All Transactions</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

