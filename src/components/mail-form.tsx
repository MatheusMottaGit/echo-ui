import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { CheckCircleIcon, Mail, Trash2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const MailForm = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card className="p-2 flex items-center gap-2 cursor-pointer">
          <Mail className="w-5 h-5" />

          <span>E-mail</span>
        </Card>
      </HoverCardTrigger>

      <HoverCardContent className="ml-2">
        <CardTitle>Enviar um email para contato</CardTitle>
        <CardDescription>Mande pela caixa de texto abaixo.</CardDescription>

        <form method="POST" action="mailto:matheusdomingues423@gmail.com">
          <div className="grid w-full space-y-4 mt-4">
            <div className="flex flex-col gap-2">
              <Label>Nome</Label>
              <Input type="text" placeholder="Diga seu nome..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label>E-mail</Label>
              <Input type="email" placeholder="Diga seu e-mail..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Mensagem</Label>
              <Textarea placeholder="Diga o assunto que deseja abordar..." />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="reset"
                variant="outline"
                className="font-bold gap-1"
              >
                Cancelar
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button type="submit" className="font-bold gap-1">
                Enviar
                <CheckCircleIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MailForm;
