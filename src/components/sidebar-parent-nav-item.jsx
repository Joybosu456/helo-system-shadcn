"use client"

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
} from "@/components/ui/sidebar"

/**
 * ParentNavItem
 *
 * A reusable parent navigation item for the shadcn sidebar.
 * - Shows a label with a radio-style indicator (via `isActive`)
 * - Can expand / collapse to show nested items
 *
 * Usage:
 *  <SidebarMenu>
 *    <ParentNavItem label="Title" defaultOpen>
 *      <SidebarMenuSubItem>
 *        <SidebarMenuSubButton isActive>Child</SidebarMenuSubButton>
 *      </SidebarMenuSubItem>
 *    </ParentNavItem>
 *  </SidebarMenu>
 */
export function ParentNavItem({
  label,
  children,
  defaultOpen = false,
  open,
  onOpenChange,
  isActive = false,
  disabled = false,
}) {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            isActive={isActive}
            disabled={disabled}
          >
            <span
              className="mr-2 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-muted-foreground/60
                         group-data-[state=open]/collapsible:border-foreground"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isActive
                    ? "bg-foreground"
                    : "bg-transparent group-data-[state=open]/collapsible:bg-foreground/50"
                }`}
              />
            </span>

            <span className="flex-1 text-sm">{label}</span>

            <ChevronDown className="ml-2 size-4 transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>{children}</SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}


