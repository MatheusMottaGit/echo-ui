import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { TabsContent } from './ui/tabs'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Square } from 'lucide-react'
import { getDate } from '@/lib/date'
import { Repo } from '@/pages/projects'
import * as dayjs from 'dayjs'
import clsx from 'clsx'

interface ListRepoProps {
  repos: Repo[]
}

const RepositoriesList = ({ repos }: ListRepoProps) => {
  const today = dayjs()

  return (
    <>
      <TabsContent value='todos' className='flex flex-col gap-5'>
        <div className='flex items-center justify-between gap-4 text-zinc-400'>
          <div className='flex gap-5'>
            <div className='flex items-center gap-1'>
              <Square className='h-4 w-4 bg-green-900/20 text-green-900/5 rounded-sm' />
              Repositórios menos recentes
            </div>

            <div className='flex items-center gap-1'>
              <Square className='h-4 w-4 text-green-400 bg-green-400 rounded-sm' />
              Repositórios mais recentes
            </div>
          </div>

          <span className='italic text-zinc-700 text-sm'>
            * Passe o mouse por cima dos cards
          </span>
        </div>

        <div className='grid grid-cols-12 gap-y-3'>
          {repos.map(repo => {
            const repoCreationDate = getDate(repo.created_at)

            const differenceBetweenDatesMonths = today.diff(repo.created_at, 'month')

            return (
              <HoverCard key={repo.id}>
                <HoverCardTrigger>
                  <Card className={clsx('w-24 h-24 cursor-pointer', {
                    'bg-green-400': differenceBetweenDatesMonths === 0,
                    'bg-green-500': differenceBetweenDatesMonths === 1,
                    'bg-green-600': differenceBetweenDatesMonths === 2,
                    'bg-green-700': differenceBetweenDatesMonths === 3,
                    'bg-green-800': differenceBetweenDatesMonths === 4,
                    'bg-green-900': differenceBetweenDatesMonths === 5,
                    'bg-green-900/50': differenceBetweenDatesMonths === 6,
                    'bg-green-400/25': differenceBetweenDatesMonths === 7,
                    'bg-green-400/20': differenceBetweenDatesMonths === 8,
                    'bg-green-400/10': differenceBetweenDatesMonths === 9,
                    'bg-green-400/5': differenceBetweenDatesMonths >= 10,
                  })}>
                  </Card>
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


