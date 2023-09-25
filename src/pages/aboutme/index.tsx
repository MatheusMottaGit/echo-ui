import PagesLayout from '@/components/layouts/pages-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BookOpen } from 'lucide-react'
import resume from '@/assets/curriculo.png'

const AboutMe = () => {
  return (
    <PagesLayout>
      <Card className='flex flex-col flex-1'>
        <CardHeader className='flex-row gap-4'>
          <img src="https://github.com/MatheusMottaGit.png" alt="" className='w-28 rounded-full' />

          <span>
            <CardTitle>Matheus Domingues Motta</CardTitle>
            <CardDescription className='mb-3'>Desenvolvedor, 19 anos</CardDescription>

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
          <Card className='p-3'>
            <CardTitle>Sobre mim</CardTitle>

          </Card>

          <Card className='row-span-2 p-3'>
            <CardTitle>Formações e cursos</CardTitle>
          </Card>

          <Card className='p-3'>
            <CardTitle>Competências</CardTitle>
          </Card>
        </CardContent>
      </Card>
    </PagesLayout>
  )
}

export default AboutMe