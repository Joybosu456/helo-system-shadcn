import MobileChat from "./MobileChat"
import WebChat from "./WebChat"

export default function ChatView() {
  return (
    <>
      <div className="block sm:hidden">
        <MobileChat />
      </div>
      <div className="hidden sm:block">
        <WebChat />
      </div>
    </>
  )
}
