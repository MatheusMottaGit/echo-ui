import { Blocks, Gavel } from "lucide-react";
import { ModeToggle } from "./components/toggle-theme";
import { GithubLink } from "./components/link-to-github";
import { useState } from "react";
import { Button } from "./components/ui/button";
import PortfolioCard from "./components/cards/portfolio-card";
import AboutMeCard from "./components/cards/about-me";
import ContactMeCard from "./components/cards/contact-me";

const words = [
  'Interatividade.',
  'Design UX/UI.',
  'Portfolio.'
]

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Blocks className="h-5 w-5" />
          <h1 className="font-bold font-sans text-lg">echo\ui</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant='outline' className="gap-2 mr-3">
            Tools
            <Gavel className="w-4 h-4" />
          </Button>

          <GithubLink />

          <ModeToggle />
        </div>
      </div>

      <main className="px-4 py-6 flex flex-col gap-10 flex-1 items-center">
        <div className="flex flex-col items-center gap-4 font-sans font-bold">
          <h1 className="text-5xl">Esta é uma página para</h1>

          <span className="text-4xl text-zinc-600 blinking-cursor">

          </span>
        </div>

        <section className="flex flex-col flex-1 border rounded-lg p-4 w-full">
          <div className="grid grid-rows-2 gap-2 text-center">
            <h1 className="text-3xl font-sans font-bold">Navegue entre as opções</h1>
            <span className="text-zinc-600">Espero que goste! 🤍</span>
          </div>

          <div className="grid grid-cols-3 gap-3 place-items-center justify-items-center">
            <PortfolioCard />
            <AboutMeCard />
            <ContactMeCard />
          </div>
        </section>
      </main>
    </div>
  )
}