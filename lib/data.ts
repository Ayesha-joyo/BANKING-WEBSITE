// Mock data for the banking application

// Accounts
const accounts = [
    {
      id: "checking",
      name: "Checking Account",
      number: "****1234",
      type: "Checking",
      balance: 2543.87,
      routingNumber: "123456789",
    },
    {
      id: "savings",
      name: "Savings Account",
      number: "****5678",
      type: "Savings",
      balance: 12750.52,
      routingNumber: "123456789",
      interestRate: 0.75,
    },
    {
      id: "credit",
      name: "Credit Card",
      number: "****9012",
      type: "Credit Card",
      balance: -450.33,
      routingNumber: "987654321",
      availableCredit: 5000,
      dueDate: "04/15/2023",
      minimumPayment: 25,
    },
  ]
  
  // Transactions
  const transactions = [
    {
      id: "t1",
      date: "2023-03-10",
      description: "Grocery Store",
      amount: -85.32,
      type: "purchase",
      accountId: "checking",
      status: "completed",
    },
    {
      id: "t2",
      date: "2023-03-09",
      description: "Salary Deposit",
      amount: 2500.0,
      type: "deposit",
      accountId: "checking",
      status: "completed",
    },
    {
      id: "t3",
      date: "2023-03-08",
      description: "Electric Bill",
      amount: -95.4,
      type: "payment",
      accountId: "checking",
      status: "completed",
    },
    {
      id: "t4",
      date: "2023-03-07",
      description: "Transfer to Savings",
      amount: -500.0,
      type: "transfer",
      accountId: "checking",
      status: "completed",
    },
    {
      id: "t5",
      date: "2023-03-07",
      description: "Transfer from Checking",
      amount: 500.0,
      type: "transfer",
      accountId: "savings",
      status: "completed",
    },
    {
      id: "t6",
      date: "2023-03-06",
      description: "Restaurant",
      amount: -62.15,
      type: "purchase",
      accountId: "credit",
      status: "completed",
    },
    {
      id: "t7",
      date: "2023-03-05",
      description: "Gas Station",
      amount: -45.0,
      type: "purchase",
      accountId: "credit",
      status: "completed",
    },
    {
      id: "t8",
      date: "2023-03-04",
      description: "Online Shopping",
      amount: -124.32,
      type: "purchase",
      accountId: "credit",
      status: "completed",
    },
    {
      id: "t9",
      date: "2023-03-03",
      description: "Credit Card Payment",
      amount: -200.0,
      type: "payment",
      accountId: "checking",
      status: "completed",
    },
    {
      id: "t10",
      date: "2023-03-03",
      description: "Payment from Checking",
      amount: 200.0,
      type: "payment",
      accountId: "credit",
      status: "completed",
    },
    {
      id: "t11",
      date: "2023-03-02",
      description: "Interest Payment",
      amount: 8.52,
      type: "interest",
      accountId: "savings",
      status: "completed",
    },
    {
      id: "t12",
      date: "2023-03-01",
      description: "Mobile Phone Bill",
      amount: -85.0,
      type: "payment",
      accountId: "checking",
      status: "completed",
    },
  ]
  
  // Bills
  const bills = [
    {
      id: "b1",
      payee: "Electric Company",
      accountNumber: "87654321",
      category: "Utility",
      amount: 95.4,
      dueDate: "2023-04-15",
    },
    {
      id: "b2",
      payee: "Water Services",
      accountNumber: "12345678",
      category: "Utility",
      amount: 45.2,
      dueDate: "2023-04-20",
    },
    {
      id: "b3",
      payee: "Internet Provider",
      accountNumber: "56781234",
      category: "Utility",
      amount: 79.99,
      dueDate: "2023-04-18",
    },
    {
      id: "b4",
      payee: "Credit Card Company",
      accountNumber: "43218765",
      category: "Credit Card",
      amount: 450.33,
      dueDate: "2023-04-15",
    },
    {
      id: "b5",
      payee: "Mobile Phone Provider",
      accountNumber: "87651234",
      category: "Utility",
      amount: 85.0,
      dueDate: "2023-04-22",
    },
  ]
  
  // Upcoming Bills
  const upcomingBills = [
    {
      id: "ub1",
      payee: "Electric Company",
      amount: 95.4,
      dueDate: "2023-04-15",
    },
    {
      id: "ub2",
      payee: "Water Services",
      amount: 45.2,
      dueDate: "2023-04-20",
    },
    {
      id: "ub3",
      payee: "Internet Provider",
      amount: 79.99,
      dueDate: "2023-04-18",
    },
  ]
  
  // Paid Bills
  const paidBills = [
    {
      id: "pb1",
      payee: "Electric Company",
      amount: 92.15,
      paidDate: "2023-03-15",
    },
    {
      id: "pb2",
      payee: "Water Services",
      amount: 43.8,
      paidDate: "2023-03-18",
    },
    {
      id: "pb3",
      payee: "Internet Provider",
      amount: 79.99,
      paidDate: "2023-03-12",
    },
  ]
  
  // Data access functions
  export function getAllAccounts() {
    return accounts
  }
  
  export function getAccount(id: string) {
    return accounts.find((account) => account.id === id)
  }
  
  export function getAllTransactions() {
    return transactions
  }
  
  export function getRecentTransactions() {
    return transactions.slice(0, 5)
  }
  
  export function getAccountTransactions(accountId: string) {
    return transactions.filter((transaction) => transaction.accountId === accountId)
  }
  
  export function getBills() {
    return bills
  }
  
  export function getUpcomingBills() {
    return upcomingBills
  }
  
  export function getPaidBills() {
    return paidBills
  }
  
  