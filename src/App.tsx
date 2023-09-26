import PortfolioCard from "./components/cards/portfolio-card";
import AboutMeCard from "./components/cards/about-me";
import PagesLayout from "./components/layouts/pages-layout";

// const words = [
//   'Interatividade.',
//   'Portfolio.'
// ]

export function App() {
  return (
    <PagesLayout>
      <div className="flex flex-col font-sans font-bold">
        <h1 className="text-5xl">Esta é uma página para</h1>

        <span className="text-4xl text-zinc-600 blinking-cursor">
          {/* Typing effect words */}
        </span>
      </div>

      <section className="grid grid-cols-2 gap-3 flex-1">
        <PortfolioCard />

        <AboutMeCard />
      </section>
    </PagesLayout>
  )
}