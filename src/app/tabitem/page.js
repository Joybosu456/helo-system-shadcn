"use client"

import { TabItem } from "@/components/tab-item"

export default function TabItemDemoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <div className="w-full max-w-sm rounded-lg border bg-background p-6 shadow-sm">
        <h1 className="mb-4 text-sm font-semibold text-purple-600">
          .Tab Item
        </h1>

        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
          <div className="space-y-2">
            <TabItem>Tab title</TabItem>

            <TabItem variant="filled">Tab title</TabItem>

            <TabItem variant="filled" className="bg-muted/60 text-muted-foreground">
              Tab title
            </TabItem>

            <TabItem variant="outline">Tab title</TabItem>

            <TabItem variant="focus-outline" className="outline-offset-0">
              Tab title
            </TabItem>
          </div>

          <div className="space-y-2">
            <TabItem variant="underline" active>
              Tab title
            </TabItem>

            <TabItem variant="filled" active>
              Tab title
            </TabItem>

            <TabItem variant="outline" active>
              Tab title
            </TabItem>

            <TabItem variant="focus-outline" active>
              Tab title
            </TabItem>

            <TabItem disabled>Tab title</TabItem>
          </div>
        </div>
      </div>
    </div>
  )
}


