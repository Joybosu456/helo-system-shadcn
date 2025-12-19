import FakeCaptcha from "@/components/FakeCaptcha"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-muted/40 p-6">
      <FakeCaptcha />
    </div>
  )
}
