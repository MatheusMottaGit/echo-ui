import PagesLayout from '@/components/layouts/pages-layout'
import RepositoriesList from '@/components/repositories-list'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tag, FileCode2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export interface Repo {
  id: string
  name: string
  visibilty: string
  created_at: string
  description: string
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    async function getRepos() {
      const response = await fetch('https://api.github.com/users/MatheusMottaGit/repos')
      const data: Repo[] = await response.json()
      setRepos(data)
    }

    getRepos()
  }, [])

  return (
    <PagesLayout>
      <div className='flex items-end justify-between'>
        <h1 className='font-sans font-bold text-4xl -mt-1'>Meus projetos</h1>
      </div>

      <Tabs className='flex-1' defaultValue='principais'>
        <TabsList className='flex flex-1 justify-around'>
          <TabsTrigger className='w-full gap-2' value='principais'>
            Principais
            <Tag className='w-4 h-4' />
          </TabsTrigger>
          <TabsTrigger className='w-full gap-2' value='todos'>
            Todos
            <FileCode2 className='w-4 h-4' />
          </TabsTrigger>
        </TabsList>

        <TabsContent value='principais' className='grid grid-cols-2 gap-3'>
          <Card className='p-3 bg-iron bg-cover opacity-50 hover:opacity-70 transition-all'></Card>
          <Card className='p-3 bg-pype bg-cover row-span-2 opacity-50 hover:opacity-70 transition-all'></Card>
          <Card className='p-3 bg-restaurant bg-cover opacity-50 hover:opacity-70 transition-all'></Card>
        </TabsContent>

        <RepositoriesList repos={repos} />

      </Tabs>
    </PagesLayout>
  )
}

export default Projects