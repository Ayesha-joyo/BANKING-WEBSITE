"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from "../../../components/ui/select"
import { useToast } from "../../../hooks/use-toast"
import { getAllAccounts } from "../../../lib/data"

export default function TransferPage() {
  const { toast } = useToast()
  const accounts = getAllAccounts()

  const [fromAccount, setFromAccount] = useState("")
  const [toAccount, setToAccount] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!fromAccount || !toAccount || !amount) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    if (fromAccount === toAccount) {
      toast({
        title: "Invalid accounts",
        description: "You cannot transfer to the same account.",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would call an API to process the transfer
    toast({
      title: "Transfer initiated",
      description: `$${amount} has been transferred successfully.`,
    })

    // Reset form
    setAmount("")
    setDescription("")
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Transfer Funds</h2>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Transfer Money</CardTitle>
              <CardDescription>Move money between your accounts or send to someone else.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="from-account">From Account</Label>
                <Select value={fromAccount} onValueChange={setFromAccount}>
                  <SelectTrigger id="from-account">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    {accounts.map((account) => (
                      <SelectItem key={account.id} value={account.id}>
                        {account.name} (${account.balance.toFixed(2)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="to-account">To Account</Label>
                <Select value={toAccount} onValueChange={setToAccount}>
                  <SelectTrigger id="to-account">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="external">External Account</SelectItem>
                    {accounts.map((account) => (
                      <SelectItem key={account.id} value={account.id}>
                        {account.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {toAccount === "external" && (
                <div className="space-y-2">
                  <Label htmlFor="recipient-details">Recipient Details</Label>
                  <Input id="recipient-details" placeholder="Account number or email" />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-muted-foreground">$</span>
                  </div>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    className="pl-7"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  placeholder="What's this for?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Transfer Funds
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

