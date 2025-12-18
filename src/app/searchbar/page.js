"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Search, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import FiltersDrawer from "@/components/FiltersDrawer"
export default function SearchBarDemoPage() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <h2 className="mb-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
            <span className="text-lg">◆</span>
            .Search Bar
          </h2>

          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-9 pr-3 rounded-full bg-muted/50 border-0 focus-visible:ring-0"
                readOnly
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-9 pr-3 rounded-full bg-muted/50 border-0 focus-visible:ring-0"
                readOnly
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
              <Input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                className={cn(
                  "w-full pl-9 pr-9 rounded-full bg-background border-2 border-blue-500 focus-visible:ring-0 focus-visible:border-blue-500",
                  "transition-colors"
                )}
                autoFocus
              />
              {searchValue && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setSearchValue("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 p-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <h2 className="mb-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
            <span className="text-lg">◆</span>
            Breadcrumb
          </h2>

          <div className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">Title</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-muted-foreground">
                    Title
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">Title</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-muted-foreground">
                    Title
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-muted-foreground">
                    Title
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">Title</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-muted-foreground">
                    Title
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <span className="text-muted-foreground">...</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">Title</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="p-6">
        <FiltersDrawer />
      </div>
    </div>
  )
}

