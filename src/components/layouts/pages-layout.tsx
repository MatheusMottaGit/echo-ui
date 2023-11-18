import { Blocks } from "lucide-react";
import { ReactNode } from "react";
import { GithubLink } from "../link-to-github";
import { ModeToggle } from "../toggle-theme";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  //basically a root layout for all pages
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2 min-[1500px]:px-72">
        <div className="flex items-center gap-2">
          <Blocks className="h-5 w-5" />
          <h1 className="font-bold font-sans text-lg">
            <a href="/">echo\ui</a>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <GithubLink />

          <ModeToggle />
        </div>
      </div>

      <main className="px-4 py-6 flex flex-col gap-10 flex-1 min-[1500px]:px-72">
        {children}
      </main>
    </div>
  );
};

export default PagesLayout;
