"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FiltersDrawer() {
  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button variant="outline">Open Filters</Button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col"
      >
        <SheetHeader className="mb-4">
          <SheetTitle>Filters</SheetTitle>
          <p className="text-sm text-muted-foreground">
            Apply filter to refine your results
          </p>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Campaign Name</label>
            <Input placeholder="Placeholder text" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Template Name</label>
            <Input placeholder="Placeholder text" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Message ID</label>
            <Input placeholder="Placeholder text" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Request ID</label>
            <Input placeholder="Placeholder text" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Mobile number</label>
            <div className="flex gap-2">
              <Select defaultValue="91">
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="91">🇮🇳 +91</SelectItem>
                  <SelectItem value="1">🇺🇸 +1</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Placeholder text" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Status</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex gap-3 border-t pt-4">
          <Button variant="outline" className="w-full">
            Reset
          </Button>
          <Button className="w-full">Apply</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
