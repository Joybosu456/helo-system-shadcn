"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Loader2, Check } from "lucide-react"

export default function FakeCaptcha() {
  const [status, setStatus] = useState("idle")

  const handleCheck = () => {
    if (status !== "idle") return

    setStatus("loading")

    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <Card className="w-full max-w-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {status === "idle" && (
          <Checkbox onCheckedChange={handleCheck} />
        )}

        {status === "loading" && (
          <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
        )}

        {status === "success" && (
          <Check className="h-5 w-5 text-green-600" />
        )}

        <span className="text-sm font-medium">I'm not a robot</span>
      </div>

      <div className="text-right">
        <div className="text-xs font-semibold text-muted-foreground">
          reCAPTCHA
        </div>
        <div className="text-[10px] text-muted-foreground">
          Privacy · Terms
        </div>
      </div>
    </Card>
  )
}
