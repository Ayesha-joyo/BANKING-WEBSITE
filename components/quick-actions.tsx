import { ArrowLeftRight, CreditCard, Receipt, DollarSign } from "lucide-react"
import Link from "next/link"

import { Button } from "./ui/button"

export function QuickActions() {
  const actions = [
    {
      title: "Transfer",
      description: "Move money between accounts",
      icon: ArrowLeftRight,
      href: "/transfer",
    },
    {
      title: "Pay Bills",
      description: "Pay your bills and utilities",
      icon: Receipt,
      href: "/bills",
    },
    {
      title: "Deposit",
      description: "Add money to your account",
      icon: DollarSign,
      href: "/deposit",
    },
    {
      title: "Cards",
      description: "Manage your cards",
      icon: CreditCard,
      href: "/cards",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <Button
            key={action.title}
            variant="outline"
            className="h-auto flex-col items-start justify-start p-4 text-left"
            asChild
          >
            <Link href={action.href}>
              <div className="flex w-full items-center">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </Link>
          </Button>
        )
      })}
    </div>
  )
}

