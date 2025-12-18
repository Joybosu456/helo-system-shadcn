"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Search, UserRound } from "lucide-react"

export default function RadioItemDemoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <div className="w-full max-w-4xl rounded-lg border bg-background p-4 shadow-sm">
        {/* Header bar */}
        <div className="mb-4 flex items-center justify-between rounded-full bg-muted px-4 py-1.5">
          <div className="flex items-center gap-2 text-sm">
            <Checkbox id="header-check" className="size-3.5 rounded-[3px]" />
            <span className="text-xs font-medium text-foreground/80">
              Title
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-background px-2 py-1 shadow-xs">
            <button className="flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <UserRound className="size-3.5" />
            </button>
            <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5">
              <Search className="size-3.5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search"
                className="h-6 border-0 bg-transparent px-1 text-xs focus-visible:ring-0"
              />
            </div>
          </div>
        </div>

        <h2 className="mb-4 text-sm font-semibold text-purple-600">
          .Radio Item
        </h2>

        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
          <RadioGroup defaultValue="left-1" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem id="left-1" value="left-1" />
              <Label htmlFor="left-1">Tab title</Label>
            </div>

            <div className="flex items-center gap-2 rounded bg-muted px-3 py-1.5">
              <RadioGroupItem id="left-2" value="left-2" />
              <Label htmlFor="left-2">Tab title</Label>
            </div>

            <div className="flex items-center gap-2 rounded bg-muted/70 px-3 py-1.5">
              <RadioGroupItem id="left-3" value="left-3" />
              <Label htmlFor="left-3">Tab title</Label>
            </div>

            <div className="flex items-center gap-2 rounded border border-blue-500 px-3 py-1.5">
              <RadioGroupItem id="left-4" value="left-4" />
              <Label htmlFor="left-4">Tab title</Label>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <RadioGroupItem id="left-5" value="left-5" disabled />
              <Label htmlFor="left-5">Tab title</Label>
            </div>
          </RadioGroup>

          <RadioGroup defaultValue="right-2" className="space-y-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <RadioGroupItem id="right-1" value="right-1" />
                <Label htmlFor="right-1" className="font-semibold">
                  Tab title
                </Label>
              </div>
              <div className="mt-0.5 h-px w-full bg-foreground" />
            </div>

            <div className="flex items-center gap-2 rounded bg-muted px-3 py-1.5">
              <RadioGroupItem id="right-2" value="right-2" />
              <Label htmlFor="right-2" className="font-semibold">
                Tab title
              </Label>
            </div>

            <div className="flex flex-col rounded bg-muted px-3 py-1.5">
              <div className="flex items-center gap-2">
                <RadioGroupItem id="right-3" value="right-3" />
                <Label htmlFor="right-3" className="font-semibold">
                  Tab title
                </Label>
              </div>
              <div className="mt-0.5 h-px w-full bg-foreground" />
            </div>

            <div className="flex items-center gap-2 rounded border border-blue-500 px-3 py-1.5">
              <RadioGroupItem id="right-4" value="right-4" />
              <Label htmlFor="right-4" className="font-semibold">
                Tab title
              </Label>
            </div>

            <div className="flex flex-col text-muted-foreground">
              <div className="flex items-center gap-2">
                <RadioGroupItem id="right-5" value="right-5" disabled />
                <Label htmlFor="right-5">Tab title</Label>
              </div>
              <div className="mt-0.5 h-px w-full bg-muted-foreground/40" />
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}


