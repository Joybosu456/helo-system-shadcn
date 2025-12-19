"use client"

import { cn } from "@/lib/utils"


export function TabItem({
  children,
  variant = "ghost", // "ghost" | "underline" | "filled" | "outline" | "focus-outline"
  active = false,
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={disabled}
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
        "disabled:cursor-not-allowed disabled:text-muted-foreground",
        "border-transparent bg-transparent text-foreground",
        variant === "ghost" && !active && "hover:bg-muted",
        variant === "underline" &&
          "rounded-none px-0 py-1 border-b-2 border-transparent hover:border-muted-foreground/40",
        variant === "underline" &&
          active &&
          "font-semibold border-foreground",
        variant === "filled" &&
          "rounded bg-muted hover:bg-muted/80",
        variant === "filled" &&
          active &&
          "bg-foreground text-background",
        variant === "outline" &&
          "rounded border border-border hover:border-foreground/60",
        variant === "outline" &&
          active &&
          "border-blue-500 text-blue-600",
        variant === "focus-outline" &&
          "rounded border border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-muted-foreground/70",
          active && "border-foreground",
          disabled && "opacity-60"
        )}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            active ? "bg-foreground" : "bg-transparent"
          )}
        />
      </span>
      <span
        className={cn(
          "text-sm",
          active && "font-semibold",
          disabled && "text-muted-foreground"
        )}
      >
        {children}
      </span>
    </button>
  )
}


