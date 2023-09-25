import { Card, CardTitle } from './ui/card'
import { useGithub } from '@/hooks/useGithub'
import { TabsContent } from './ui/tabs'
import TabsLayout from './layouts/tabs-layout'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Square } from 'lucide-react'

interface SearchedRepoProps {
  search: string
}

const RepositoriesList = ({ }: SearchedRepoProps) => {
  const { repos } = useGithub()

  // const filteredRepos = search.length > 0 ? repos.filter(repo => repo.name.includes(search)) : []

  return (
    <>
      <TabsLayout>
        <TabsContent value='principais' className='grid grid-cols-2 gap-3'>
          <Card className='p-3 bg-iron bg-cover h-52 opacity-50 hover:opacity-70 transition-all'></Card>
          <Card className='p-3 bg-pype bg-cover row-span-2 opacity-50 hover:opacity-70 transition-all'></Card>
          <Card className='p-3 bg-restaurant bg-cover h-52 opacity-50 hover:opacity-70 transition-all'></Card>
        </TabsContent>

        <TabsContent value='todos' className='grid grid-cols-1 gap-3'>
          <div className='flex items-center gap-4 text-zinc-200'>
            <div className='flex items-center gap-1'>
              <Square className='h-4 w-4 text-zinc-900 bg-zinc-900 rounded-sm' />
              Mais recente
            </div>

            <div className='flex items-center gap-1'>
              <Square className='h-4 w-4 text-zinc-700 bg-zinc-700 rounded-sm' />
              Menos recente
            </div>
          </div>

          <div className='grid grid-cols-10 gap-2'>
            {repos.map(repo => {
              // const repoCreationDate = getDate(repo.created_at)

              return (
                <HoverCard key={repo.id}>
                  <HoverCardTrigger>
                    <Card className={`h-[124px] cursor-pointer`}></Card>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <CardTitle>{repo.name}</CardTitle>
                  </HoverCardContent>
                </HoverCard>
              )
            })}
          </div>
        </TabsContent>
      </TabsLayout>
    </>
  )
}

export default RepositoriesList

