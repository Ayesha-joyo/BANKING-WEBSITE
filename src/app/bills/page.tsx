"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, Plus } from "lucide-react"

import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger, } from "../../../components/ui/dialog"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Select , SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../../components/ui/select"
import { useToast } from "../../../hooks/use-toast"
import { getBills, getUpcomingBills, getPaidBills } from "../../../lib/data" 

export default function BillsPage() {
  const { toast } = useToast()
  const bills = getBills()
  const upcomingBills = getUpcomingBills()
  const paidBills = getPaidBills()

  const [open, setOpen] = useState(false)
  const [payeeType, setPayeeType] = useState("utility")
  const [payeeName, setPayeeName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!payeeType || !payeeName || !accountNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would call an API to add the payee
    toast({
      title: "Payee added",
      description: `${payeeName} has been added to your payees.`,
    })

    setOpen(false)
    resetForm()
  }

  const resetForm = () => {
    setPayeeType("utility")
    setPayeeName("")
    setAccountNumber("")
    setAmount("")
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-2xl font-bold tracking-tight">Bill Payments</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Payee
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Add New Payee</DialogTitle>
                  <DialogDescription>Add a new company or person to pay bills to.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="payee-type">Payee Type</Label>
                    <Select value={payeeType} onValueChange={setPayeeType}>
                      <SelectTrigger id="payee-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utility">Utility</SelectItem>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="loan">Loan</SelectItem>
                        <SelectItem value="person">Person</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payee-name">Payee Name</Label>
                    <Input id="payee-name" value={payeeName} onChange={(e) => setPayeeName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input
                      id="account-number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Payee</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="payees">Payees</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingBills.map((bill) => (
                <Card key={bill.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{bill.payee}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      Due {bill.dueDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${bill.amount.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Pay Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="paid" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {paidBills.map((bill) => (
                <Card key={bill.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{bill.payee}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      Paid on {bill.paidDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${bill.amount.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Receipt
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="payees" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {bills.map((bill) => (
                <Card key={bill.id}>
                  <CardHeader>
                    <CardTitle>{bill.payee}</CardTitle>
                    <CardDescription>Account #{bill.accountNumber}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{bill.category}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Edit</Button>
                    <Button>Pay</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

