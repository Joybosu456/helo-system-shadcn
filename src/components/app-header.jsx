"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppHeader({ title = "Title", className, ...props }) {
  return (
    <header
      className={cn(
        "flex items-center justify-between border-b bg-background px-4 py-3",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Checkbox id="header-checkbox" />
        <label
          htmlFor="header-checkbox"
          className="text-sm font-medium cursor-pointer select-none"
        >
          {title}
        </label>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
        >
          <Bell className="h-4 w-4" />
        </Button>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="w-64 pl-9 rounded-full bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div>
    </header>
  )
}

