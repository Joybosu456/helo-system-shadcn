"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function CustomCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="relative">
        <CarouselContent className="-ml-4">
          {[1, 2, 3].map((item) => (
            <CarouselItem
              key={item}
              className="pl-4 md:basis-1/3"
            >
              <Card className="h-40">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold">Title</h3>
                  <p className="text-sm text-muted-foreground">
                    Description
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[-3rem]" />
        <CarouselNext className="right-[-3rem]" />
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-foreground" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
      </div>
    </div>
  )
}
