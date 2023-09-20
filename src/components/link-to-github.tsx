import { ExternalLink, Github } from 'lucide-react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card'

export const GithubLink = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Github className='h-5 w-5 cursor-pointer' />
      </HoverCardTrigger>
      <HoverCardContent className='mr-2'>
        <div className='flex gap-4'>
          <img
            src="https://github.com/MatheusMottaGit.png"
            className='w-12 h-12 rounded-full'
          />

          <div className='flex flex-col flex-1 gap-1'>
            <h2 className='text-base font-bold'>Matheus Domingues Motta</h2>

            <a href="https://github.com/MatheusMottaGit" className='text-sm underline text-neutral-500 flex gap-2 items-center'>
              Acessar Github
              <ExternalLink className='h-4 w-4' />
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

  )
}