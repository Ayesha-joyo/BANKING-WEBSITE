import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "../../lib/utils"
import { ThemeProvider } from "../../components/theme-provider"
import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { SidebarNav } from "../../components/sidebar-nav"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SecureBank - Online Banking",
  description: "A secure and user-friendly banking application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <aside className="hidden w-[200px] flex-col border-r md:flex">
                <SidebarNav />
              </aside>
              <main className="flex-1">{children}</main>
            </div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

