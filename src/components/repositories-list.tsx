import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { TabsContent } from './ui/tabs'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Square } from 'lucide-react'
import { getDate } from '@/lib/date'
import { Repo } from '@/pages/projects'

interface GetRepoProps {
  repos: Repo[]
}

const RepositoriesList = ({ repos }: GetRepoProps) => {
  return (
    <>
      <TabsContent value='todos' className='flex flex-col gap-5'>
        <div className='flex items-center justify-between gap-4 text-zinc-400'>
          <div className='flex gap-5'>
            <div className='flex items-center gap-1'>
              <Square className='h-4 w-4 bg-green-700 text-green-700 rounded-sm' />
              Repositório mais recente
            </div>

            <div className='flex items-center gap-1'>
              <Square className='h-4 w-4 text-green-500 bg-green-500 rounded-sm' />
              Repositório menos recente
            </div>
          </div>

          <span className='italic text-zinc-700 text-sm'>
            * Passe o mouse por cima dos cards
          </span>
        </div>

        <div className='grid grid-cols-12 gap-y-3'>
          {repos.map(repo => {
            const repoCreationDate = getDate(repo.created_at)

            return (
              <HoverCard key={repo.id}>
                <HoverCardTrigger>
                  <Card className={`w-24 h-24 cursor-pointer`}></Card>
                </HoverCardTrigger>
                <HoverCardContent>
                  <CardTitle>{repo.name}</CardTitle>
                  <CardDescription>Data de criação: {repoCreationDate}</CardDescription>

                  <CardContent className='p-0 mt-4 text-zinc-500'>{repo.description}</CardContent>
                </HoverCardContent>
              </HoverCard>
            )
          })}
        </div>
      </TabsContent>
    </>
  )
}

export default RepositoriesList


