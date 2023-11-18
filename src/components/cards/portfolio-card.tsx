import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRight } from "lucide-react";

const PortfolioCard = () => {
  return (
    <Card className="cursor-pointer hover:bg-zinc-900/20 hover:transition-colors">
      <CardHeader>
        <CardTitle>Meus projetos</CardTitle>
        <CardDescription>
          Nessa sessão mostro minhas aplicações como desenvolvedor frontend.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-zinc-400">
        <p>
          Todas as aplicações estão como repositórios no{" "}
          <a href="" className="font-bold underline text-zinc-600">
            Github
          </a>
          , e outras até mesmo publicadas, as quais poderão ser acessadas nessa
          página!
        </p>
      </CardContent>
      <CardFooter>
        <a
          href="/projects"
          className="flex items-center gap-1 underline text-sm"
        >
          Acessar página
          <ArrowRight className="w-4 h-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
