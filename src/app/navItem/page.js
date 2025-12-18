"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { ParentNavItem } from "@/components/sidebar-parent-nav-item"

export default function NavItemDemoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <div className="w-full max-w-4xl rounded-lg border bg-background p-6 shadow-sm">
        <h1 className="mb-4 text-lg font-semibold text-muted-foreground">
          .Parent Nav Item
        </h1>

        <div className="grid gap-4 md:grid-cols-3">
          <Sidebar className="h-auto border bg-card">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <ParentNavItem label="Title" />

                    <ParentNavItem label="Title" defaultOpen isActive>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton isActive>
                          <span>Child</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </ParentNavItem>

                    <ParentNavItem label="Title" defaultOpen>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Child</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </ParentNavItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <Sidebar className="h-auto border bg-card">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <ParentNavItem label="Title" isActive />

                    <ParentNavItem label="Title" defaultOpen isActive>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton isActive>
                          <span>Title</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </ParentNavItem>

                    <ParentNavItem label="Title" disabled />
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <Sidebar className="h-auto border bg-card">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <ParentNavItem label="Title" showChevron={false} />
                    <ParentNavItem label="Title" isActive showChevron={false} />
                    <ParentNavItem label="Title" disabled showChevron={false} />
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </div>
      </div>
    </div>
  )
}


