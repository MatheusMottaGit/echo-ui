import PagesLayout from '@/components/layouts/pages-layout'
import TabsLayout from '@/components/layouts/tabs-layout'
import RepositoriesList from '@/components/repositories-list'
import { Card } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
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

      <section className='flex-1'>
        <TabsLayout>
          <TabsContent value='principais' className='grid grid-cols-2 gap-3'>
            <Card className='p-3 bg-iron bg-cover opacity-50 hover:opacity-70 transition-all'></Card>
            <Card className='p-3 bg-pype bg-cover row-span-2 opacity-50 hover:opacity-70 transition-all'></Card>
            <Card className='p-3 bg-restaurant bg-cover opacity-50 hover:opacity-70 transition-all'></Card>
          </TabsContent>

          <RepositoriesList repos={repos} />
        </TabsLayout>
      </section>
    </PagesLayout>
  )
}

export default Projects