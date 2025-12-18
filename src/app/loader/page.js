"use client"

import { Loader } from "@/components/ui/loader"
import { Progress } from "@/components/ui/progress"

export default function LoaderDemoPage() {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-muted/40 p-6">
      <div className="w-full max-w-2xl rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="mb-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
          <span className="text-lg">◆</span>
          Loader
        </h2>

        <div className="grid grid-cols-3 gap-8 place-items-center">
          <div className="flex flex-col items-center gap-6">
            <Loader size="thick" color="blue" arcLength="3/4" />
            <Loader size="medium" color="blue" arcLength="3/4" />
            <Loader size="thin" color="blue" arcLength="3/4" />
          </div>

          <div className="flex flex-col items-center gap-6">
            <Loader size="thick" color="foreground" arcLength="3/4" />
            <Loader size="medium" color="foreground" arcLength="3/4" />
            <Loader size="thin" color="foreground" arcLength="3/4" />
          </div>

          <div className="flex flex-col items-center gap-6">
            <Loader size="thick" color="foreground" arcLength="1/4" />
            <Loader size="medium" color="foreground" arcLength="1/4" />
            <Loader size="thin" color="foreground" arcLength="1/4" />
          </div>
        </div>

      </div>
      <Progress value={20} className="w-full max-w-2xl [&>div]:bg-blue-500" />
      <Progress value={30} className="w-full max-w-2xl [&>div]:bg-foreground" />
      <Progress value={60} className="w-full max-w-2xl [&>div]:bg-red-500" />
      <Progress value={80} className="w-full max-w-2xl [&>div]:bg-white" />


    </div>
  )
}

