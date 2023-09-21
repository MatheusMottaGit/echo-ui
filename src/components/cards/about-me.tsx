import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'

const AboutMeCard = () => {
  return (
    <Card className='h-72 cursor-pointer hover:bg-zinc-900/20 hover:transition-colors'>
      <CardHeader>
        <CardTitle>Sobre mim</CardTitle>
        <CardDescription>Aqui falarei um pouco sobre mim, minhas motivações, e interesses!</CardDescription>
      </CardHeader>
      <CardContent className='text-zinc-400'>
        <p>
          Me chamo Matheus, tenho 19 anos, e atualmente estou tentando crescer na área de Desenvolvimento Front-End...
        </p>
      </CardContent>
      <CardFooter>
        <a href="/aboutme" className='flex items-center gap-1 underline'>
          Acessar página
          <ArrowRight className='w-4 h-4' />
        </a>
      </CardFooter>
    </Card>
  )
}

export default AboutMeCard