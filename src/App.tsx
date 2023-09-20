import { Blocks } from "lucide-react";
import { ModeToggle } from "./components/toggle-theme";
import { GithubLink } from "./components/link-to-github";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Blocks className="h-5 w-5" />
          <h1 className="font-bold font-sans text-lg">echo\ui</h1>
        </div>

        <div className="flex items-center gap-2">
          <GithubLink />

          <ModeToggle />
        </div>
      </div>

      <main className="px-4 py-6 flex flex-col gap-10 flex-1 items-center">

      </main>
    </div>
  )
}