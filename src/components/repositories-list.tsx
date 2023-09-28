import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { TabsContent } from './ui/tabs'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Square } from 'lucide-react'
import { getDate } from '@/lib/date'
import { Repo } from '@/pages/projects'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import clsx from 'clsx'

dayjs.locale(ptBR)

interface ListRepoProps {
  repos: Repo[]
}

const RepositoriesList = ({ repos }: ListRepoProps) => {

  return (
    <>
      <TabsContent value='todos' className='flex flex-col gap-5'>
        <div className='flex items-center justify-between gap-4 text-zinc-400 max-[781px]:flex-col'>
          <div className='flex gap-5 max-[446px]:flex-col max-[446px]:items-center'>
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

        <div className='grid grid-cols-12 gap-y-3 max-[1269px]:grid-cols-11 max-[1143px]:grid-cols-10 max-[1080px]:grid-cols-9 max-[940px]:grid-cols-8 max-[843px]:grid-cols-7 max-[769px]:grid-cols-6 max-[781px]:place-items-center max-[642px]:grid-cols-5 max-[546px]:grid-cols-4 max-[416px]:grid-cols-3 max-[320px]:gap-x-5'>
          {repos.map(repo => {
            const repoCreationDate = getDate(repo.created_at)

            const differenceBetweenDatesMonths = dayjs().diff(repo.created_at, 'month')

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

