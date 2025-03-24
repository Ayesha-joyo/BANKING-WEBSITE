import { PlusCircle } from "lucide-react"

import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { getAllAccounts } from "../../../lib/data"

export default function AccountsPage() {
  const accounts = getAllAccounts()

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-2xl font-bold tracking-tight">My Accounts</h2>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Account
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {accounts.map((account) => (
            <Card key={account.id}>
              <CardHeader className="pb-2">
                <CardTitle>{account.name}</CardTitle>
                <CardDescription>#{account.number}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${account.balance.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">Available Balance</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`/accounts/${account.id}`}>View Details</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

