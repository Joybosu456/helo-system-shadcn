"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, Plus, Mic } from "lucide-react"

export default function MobileChat() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="flex items-center gap-2 px-3 py-2 border-b">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Avatar className="h-8 w-8">
          <AvatarFallback>R</AvatarFallback>
        </Avatar>

        <div className="text-sm font-medium">Your Name</div>
      </div>

      <div className="flex-1 px-3 py-4 space-y-3 bg-muted/30">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="max-w-[75%] rounded-xl bg-muted px-3 py-2 text-sm"
          >
            Preview your message here...
          </div>
        ))}
      </div>

      <div className="border-t px-2 py-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
          </Button>

          <Input
            placeholder="Text Message • SMS"
            className="rounded-full"
          />

          {/* <Button variant="ghost" size="icon">
            <Mic className="h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </div>
  )
}
