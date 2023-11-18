import { ExternalLink, Github } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { Button } from "./ui/button";

export const GithubLink = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline" className="gap-1">
          <Github className="h-4 w-4 cursor-pointer" />
          Github
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="mr-2 w-[334px]">
        <div className="flex gap-4">
          <img
            src="https://github.com/MatheusMottaGit.png"
            className="w-16 h-16 rounded-full"
          />

          <div className="flex flex-col flex-1 gap-1">
            <h2 className="text- font-bold">Matheus Domingues Motta</h2>

            <a
              href="https://github.com/MatheusMottaGit"
              className="text-sm underline text-neutral-500 flex gap-2 items-center"
            >
              Acessar Github
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
