import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'

const ContactMeCard = () => {
  return (
    <Card className='h-72 cursor-pointer hover:bg-zinc-900/20 hover:transition-colors'>
      <CardHeader>
        <CardTitle>Contatos</CardTitle>
        <CardDescription>Caso tenha se interessado por tudo o que viu, por aqui será possível ver meus contatos!</CardDescription>
      </CardHeader>
      <CardContent className='text-zinc-400'>
        <p>
          De Instagram à Gmail, apresento diversas opções para facilitar a comunicação comigo!
        </p>
      </CardContent>
      <CardFooter>
        <a href="/contact" className='flex items-center gap-1 underline'>
          Acessar página
          <ArrowRight className='w-4 h-4' />
        </a>
      </CardFooter>
    </Card>
  )
}

export default ContactMeCard