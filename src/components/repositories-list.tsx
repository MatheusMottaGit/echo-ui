import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import TabsLayout from './tabs-layout'
import { useGithub } from '@/hooks/useGithub'
import { TabsContent } from './ui/tabs'
import { getDate } from '@/lib/date'

interface SearchedRepoProps {
  search: string
}

const RepositoriesList = ({ search }: SearchedRepoProps) => {
  const { repos } = useGithub()

  const filteredRepos = search.length > 0 ? repos.filter(repo => repo.name.includes(search)) : []

  return (
    <>
      <TabsLayout>
        <TabsContent value='principais' className='grid grid-cols-2 gap-3'>

        </TabsContent>

        <TabsContent value='outros' className='grid grid-cols-2 gap-2'>
          {search.length > 0 ? (
            <>
              {filteredRepos.map(repo => {
                const repoCreationDate = getDate(repo.created_at)

                return (
                  <Card key={repo.id} className='h-fit cursor-pointer hover:bg-zinc-900/20 hover:transition-colors'>
                    <CardHeader>
                      <CardTitle>{repo.name}</CardTitle>
                      <CardDescription>Criado em: {repoCreationDate}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </>
          ) : (
            <>
              {repos.map(repo => {
                const repoCreationDate = getDate(repo.created_at)

                return (
                  <Card key={repo.id} className='h-fit cursor-pointer hover:bg-zinc-900/20 hover:transition-colors'>
                    <CardHeader>
                      <CardTitle>{repo.name}</CardTitle>
                      <CardDescription>Criado em: {repoCreationDate}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </>
          )}
        </TabsContent>
      </TabsLayout>
    </>
  )
}

export default RepositoriesList

