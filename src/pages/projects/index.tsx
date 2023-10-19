import MainAppsDialogLayout from '@/components/layouts/main-apps-dialog-layout'
import PagesLayout from '@/components/layouts/pages-layout'
import RepositoriesList from '@/components/repositories-list'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tag, FileCode2, CopyPlus } from 'lucide-react'
import { useState, useEffect } from 'react'
import pypestore from '@/tmp/pypestore.mp4'
import restaurant from '@/tmp/restaurant.mp4'
import ironGym from '@/tmp/ironGym.mp4'

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
        <h1 className='font-sans font-bold text-4xl -mt-1 max-[320px]:ml-4'>Meus projetos</h1>
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

        <TabsContent value='principais'>
          <div className='grid grid-cols-2 gap-3 min-[1500px]:h-[740px] max-[1440px]:h-[640px] max-[534px]:grid-cols-1'>
            <MainAppsDialogLayout
              title='Iron Gym'
              description='Landing Page de apresentação de uma academia chamada "Iron Gym" feita em NextJs e TailwindCSS.'
              video={ironGym}
            >
              <Card className='p-3 bg-iron bg-cover h-full'></Card>
            </MainAppsDialogLayout>

            <MainAppsDialogLayout
              title='Pypestore'
              description='Página de um ecommerce de roupas chamado "Pypestore", com layout próprio, feita em ReactJS e TailwindCSS, e ferramentas como JSON Server, Context API, etc.'
              video={pypestore}
            >
              <Card className='p-3 bg-pype bg-cover h-full'></Card>
            </MainAppsDialogLayout>

            <MainAppsDialogLayout
              title='Restaurant WebPage'
              description='Página web de apresentação de um restaurante, com layout próprio, utilizando apenas HTML e CSS.'
              video={restaurant}
            >
              <Card className='p-3 bg-restaurant bg-cover h-full'></Card>
            </MainAppsDialogLayout>

            <div className='w-full border border-dashed rounded-md flex flex-col gap-3 items-center justify-center text-zinc-700'>
              <CopyPlus className='h-5 w-5' />
              <span>Novas aplicações em breve...</span>
            </div>
          </div>
        </TabsContent>

        <RepositoriesList repos={repos} />

      </Tabs>
    </PagesLayout>
  )
}

export default Projects