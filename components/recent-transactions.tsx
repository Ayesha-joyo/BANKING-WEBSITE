import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getRecentTransactions } from "../lib/data"

// Define the transaction type with an optional 'icon' property
interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: string;
  accountId: string;
  status: string;
  icon?: string;  // Make icon optional
}

export function RecentTransactions() {
  const transactions = getRecentTransactions() as Transaction[]; // Ensure the data is cast to the correct type

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            {/* Check if transaction.icon exists, otherwise use a fallback */}
            <AvatarImage 
              src={transaction.icon || "/path/to/default-icon.png"} // Use default image if 'icon' is missing
              alt={transaction.description} 
            />
            <AvatarFallback>
              {transaction.description.charAt(0).toUpperCase()}  {/* Display first letter as fallback */}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.description}</p>
            <p className="text-xs text-muted-foreground">{transaction.date}</p>
          </div>
          <div className={`font-medium ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
            {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}
