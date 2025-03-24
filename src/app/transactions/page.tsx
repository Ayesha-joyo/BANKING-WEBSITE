"use client"

import { useState } from "react"
import { CalendarIcon, Download } from "lucide-react"
import { format } from "date-fns"

import { Button } from "../../../components/ui/button"
import { Calendar } from "../../../components/ui/calendar"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { cn } from "../../../lib/utils"
import { TransactionTable } from "../../../components/transaction-table"
import { getAllTransactions } from "../../../lib/data"

export default function TransactionsPage() {
  const transactions = getAllTransactions()

  const [date, setDate] = useState<Date>()
  const [account, setAccount] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("")

  // Filter transactions based on selected filters
  const filteredTransactions = transactions.filter((transaction) => {
    let matches = true

    if (account && transaction.accountId !== account) {
      matches = false
    }

    if (type && transaction.type !== type) {
      matches = false
    }

    if (date && format(new Date(transaction.date), "yyyy-MM-dd") !== format(date, "yyyy-MM-dd")) {
      matches = false
    }

    if (searchTerm && !transaction.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      matches = false
    }

    return matches
  })

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-2xl font-bold tracking-tight">Transaction History</h2>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="account">Account</Label>
            <Select value={account} onValueChange={setAccount}>
              <SelectTrigger id="account">
                <SelectValue placeholder="All Accounts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Accounts</SelectItem>
                <SelectItem value="checking">Checking</SelectItem>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="credit">Credit Card</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Transaction Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger id="type">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
                <SelectItem value="transfer">Transfer</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  )
}

