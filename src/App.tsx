import PortfolioCard from "./components/cards/portfolio-card";
import AboutMeCard from "./components/cards/about-me";
import ContactMeCard from "./components/cards/contact-me";
import PagesLayout from "./components/pages-layout";

const words = [
  'Interatividade.',
  'Design UX/UI.',
  'Portfolio.'
]

export function App() {
  return (
    <PagesLayout>
      <div className="flex flex-col items-center gap-4 font-sans font-bold">
        <h1 className="text-5xl">Esta é uma página para</h1>

        <span className="text-4xl text-zinc-600 blinking-cursor">
          {/* Typing effect words */}
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
    </PagesLayout>
  )
}