import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface Account {
  id: string
  name: string
  number: string
  type: string
  balance: number
  routingNumber: string
  interestRate?: number
  availableCredit?: number
  dueDate?: string
  minimumPayment?: number
}

interface AccountDetailsProps {
  account: Account
}

export function AccountDetails({ account }: AccountDetailsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Details about your {account.name}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Account Number:</span>
            <span>{account.number}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Account Type:</span>
            <span>{account.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Routing Number:</span>
            <span>{account.routingNumber}</span>
          </div>
          {account.interestRate && (
            <div className="flex justify-between">
              <span className="font-medium">Interest Rate:</span>
              <span>{account.interestRate}%</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="font-medium">Available Balance:</span>
            <span className="font-bold">${account.balance.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      {account.type === "Credit Card" && (
        <Card>
          <CardHeader>
            <CardTitle>Credit Information</CardTitle>
            <CardDescription>Details about your credit card</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Available Credit:</span>
              <span>${account.availableCredit?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Payment Due Date:</span>
              <span>{account.dueDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Minimum Payment:</span>
              <span>${account.minimumPayment?.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

