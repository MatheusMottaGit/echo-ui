import PagesLayout from '@/components/layouts/pages-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BookOpen, Github, Instagram, Linkedin, MousePointerClick } from 'lucide-react'
import resume from '@/assets/curriculo.png'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import MailForm from '@/components/mail-form'
import CoursesCard from '@/components/cards/courses-card'

const contacts = [
  { icon: <Instagram className='h-5 w-5' />, media: 'Instagram', url: 'https://www.instagram.com/o_matheus_motta/', id: 1 },
  { icon: <Linkedin className='h-5 w-5' />, media: 'Linkedin', url: 'https://www.linkedin.com/in/matheus-domingues-motta-918438257/', id: 2 },
  { icon: <Github className='h-5 w-5' />, media: 'Github', url: 'https://github.com/MatheusMottaGit', id: 3 }
]

const AboutMe = () => {
  return (
    <PagesLayout>
      <Card className='flex flex-col flex-1'>
        <CardHeader className='flex-row gap-4'>
          <img src="https://github.com/MatheusMottaGit.png" alt="" className='w-28 rounded-full' />

          <span>
            <CardTitle>Matheus Domingues Motta</CardTitle>
            <CardDescription className='mb-5 mt-1 flex items-center gap-1'>
              <MousePointerClick className='h-5 w-5' />
              Desenvolvedor frontend, 19 anos
            </CardDescription>

            <Dialog>
              <DialogTrigger>
                <Button variant='outline' className='gap-2'>
                  <BookOpen className='h-4 w-4' />
                  Ver currículo
                </Button>
              </DialogTrigger>

              <DialogContent className='justify-center'>
                <img src={resume} alt="" className='h-[564px] rounded-md' />
              </DialogContent>
            </Dialog>
          </span>
        </CardHeader>

        <CardContent className='grid grid-cols-2 gap-3 flex-1'>
          <CoursesCard />

          <Card className=' row-span-2 p-3'>
            <CardTitle>Sobre mim</CardTitle>
            <CardDescription className='mt-1'>Atualmente, venho estudando constantemente a área de desenvolvimento web frontend. Desde 2021, quando iniciei, venho contruindo uma base sólida em <strong>HTML, CSS e Javascript</strong>, e, também conhecendo novas ferramentas como o <strong>ReactJs</strong> e <strong>NextJS</strong>. De uns meses pra cá, venho também tentando me familiarizar com o backend, utilizando o <strong>NodeJs</strong>, para me tornar um desenvolvedor full-stack futuramente!</CardDescription>

            <div className='mt-9 grid grid-cols-3 gap-3 flex-1'>
              {contacts.map(contact => {
                return (
                  <HoverCard>
                    <HoverCardTrigger key={contact.id}>
                      <Card className='p-2 flex items-center gap-2 cursor-pointer'>
                        {contact.icon}

                        <span>{contact.media}</span>
                      </Card>
                    </HoverCardTrigger>

                    <HoverCardContent>

                    </HoverCardContent>
                  </HoverCard>
                )
              })}

              <MailForm />
            </div>
          </Card>

          <Card className='p-3'>
            <CardTitle>Competências</CardTitle>
            <CardDescription></CardDescription>
          </Card>
        </CardContent>
      </Card>
    </PagesLayout>
  )
}

export default AboutMe