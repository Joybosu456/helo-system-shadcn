import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonList() {
  return (
    <div className="space-y-6 pl-20 pt-20">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />

          <div className="flex-1 space-y-3">
            <Skeleton className="h-4 w-1/3" />

            <div className="flex gap-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-24" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-3 w-24" />
            </div>

            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}
