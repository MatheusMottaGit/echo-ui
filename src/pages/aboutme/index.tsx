import PagesLayout from "@/components/layouts/pages-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  BookOpen,
  Github,
  Instagram,
  Linkedin,
  MousePointerClick,
} from "lucide-react";
import resume from "@/assets/myresume.png";
import CoursesCard from "@/components/cards/courses-card";
import SkillsCards from "@/components/cards/skills-cards";

const contacts = [
  {
    icon: <Instagram className="h-5 w-5" />,
    media: "Instagram",
    url: "https://www.instagram.com/o_matheus_motta/",
    id: 1,
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    media: "Linkedin",
    url: "https://www.linkedin.com/in/matheus-domingues-motta-918438257/",
    id: 2,
  },
  {
    icon: <Github className="h-5 w-5" />,
    media: "Github",
    url: "https://github.com/MatheusMottaGit",
    id: 3,
  },
];

const AboutMe = () => {
  return (
    <PagesLayout>
      <Card className="flex flex-col flex-1">
        <CardHeader className="flex-row gap-4 max-[415px]:flex-col max-[415px]:items-center">
          <img
            src="https://github.com/MatheusMottaGit.png"
            alt=""
            className="w-28 rounded-full max-[415px]:w-24 max-[415px]:h-24"
          />

          <span className="max-[415px]:text-center">
            <CardTitle className="max-[415px]:text-sm max-[415px]:ml-9">
              Matheus Domingues Motta
            </CardTitle>
            <CardDescription className="mb-5 mt-1 flex items-center gap-1">
              <MousePointerClick className="h-5 w-5" />
              Desenvolvedor frontend, 19 anos
            </CardDescription>

            <Dialog>
              <DialogTrigger>
                <Button variant="outline" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Ver currículo
                </Button>
              </DialogTrigger>

              <DialogContent className="justify-center">
                <img src={resume} alt="" className="h-[564px] rounded-md" />
              </DialogContent>
            </Dialog>
          </span>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-3 flex-1 max-[1024px]:grid-cols-1">
          <CoursesCard />

          <Card className=" row-span-2 p-3">
            <CardTitle>Sobre mim</CardTitle>
            <CardDescription className="mt-4">
              Atualmente, venho estudando constantemente a área de
              desenvolvimento web frontend. Desde 2021, quando iniciei, venho
              contruindo uma base sólida em{" "}
              <strong>HTML, CSS e Javascript</strong>, e, também conhecendo
              novas ferramentas como o <strong>ReactJs</strong> e{" "}
              <strong>NextJS</strong>. De uns meses pra cá, venho também
              tentando me familiarizar com o backend, utilizando o{" "}
              <strong>NodeJs</strong>, para me tornar um desenvolvedor
              full-stack futuramente!
            </CardDescription>

            <div className="mt-9 grid grid-cols-3 gap-3 flex-1 max-[596px]:grid-cols-2">
              {contacts.map((contact) => {
                return (
                  <Card
                    key={contact.id}
                    className="p-2 flex items-center gap-2 cursor-pointer"
                  >
                    {contact.icon}

                    <a href={contact.url}>{contact.media}</a>
                  </Card>
                );
              })}

              {/* <MailForm /> */}
            </div>
          </Card>

          <Card className="p-3">
            <CardTitle>Competências</CardTitle>

            <SkillsCards />
          </Card>
        </CardContent>
      </Card>
    </PagesLayout>
  );
};

export default AboutMe;
