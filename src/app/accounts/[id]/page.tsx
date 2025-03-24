import { notFound } from "next/navigation"
import { ArrowLeft, Download, Filter } from "lucide-react"

import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { AccountTransactions } from "../../../../components/account-transactions"
import { AccountDetails } from "../../../../components/account-details"
import { getAccount } from "../../../../lib/data"

export default function AccountPage({ params }: { params: { id: string } }) {
  const account = getAccount(params.id)

  if (!account) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2" asChild>
              <a href="/accounts">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </a>
            </Button>
            <h2 className="text-2xl font-bold tracking-tight">{account.name}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>{account.name}</CardTitle>
            <CardDescription>Account #{account.number}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Available Balance</p>
                <p className="text-2xl font-bold">${account.balance.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Account Type</p>
                <p className="text-lg">{account.type}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Routing Number</p>
                <p className="text-lg">{account.routingNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="transactions">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="details">Account Details</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions" className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Recent Transactions</h3>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <AccountTransactions accountId={params.id} />
          </TabsContent>
          <TabsContent value="details">
            <AccountDetails account={account} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

