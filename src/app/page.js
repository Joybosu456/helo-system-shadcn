import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AppHeader } from "@/components/app-header"

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppHeader title="Title" />
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Welcome to Helo.ai</h1>
        </div>
        <p>This is the home page of your dashboard. Explore and enjoy!</p>
        <Button variant="outline">Button</Button>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
