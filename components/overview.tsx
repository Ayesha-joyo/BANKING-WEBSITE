"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 9800,
    expense: 2000,
  },
  {
    name: "Apr",
    income: 3908,
    expense: 2780,
  },
  {
    name: "May",
    income: 4800,
    expense: 1890,
  },
  {
    name: "Jun",
    income: 3800,
    expense: 2390,
  },
  {
    name: "Jul",
    income: 4300,
    expense: 3490,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="income" fill="#4ade80" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expense" fill="#f43f5e" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

