"use client"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Video, Phone, Search, MoreVertical, Mic } from "lucide-react"

export default function WebChat() {
  return (
    <div className="h-screen flex flex-col bg-[#efeae2]">
      <div className="flex items-center justify-between px-4 py-3 bg-background border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/40" />
          </Avatar>
          <span className="font-medium">ABCD</span>
        </div>

        <div className="flex gap-4">
          <Video className="h-5 w-5 cursor-pointer" />
          <Phone className="h-5 w-5 cursor-pointer" />
          <Search className="h-5 w-5 cursor-pointer" />
          <MoreVertical className="h-5 w-5 cursor-pointer" />
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        <div className="max-w-xs bg-white px-4 py-2 rounded-lg shadow">
          Miss u darling
          <div className="text-xs text-muted-foreground text-right">17:08</div>
        </div>

        <div className="ml-auto max-w-xs bg-green-100 px-4 py-2 rounded-lg shadow">
          Miss you too baby
          <div className="text-xs text-muted-foreground text-right">17:08</div>
        </div>

        <div className="bg-white px-4 py-3 rounded-lg shadow max-w-md">
          <p className="font-medium">📹 Missed video call</p>
          <p className="text-sm text-muted-foreground">Click to call back</p>
          <div className="text-xs text-muted-foreground text-right">13:47</div>
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 py-3 bg-background border-t">
        <Input placeholder="Type a message" />
        <Mic className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  )
}
