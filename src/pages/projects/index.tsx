import PagesLayout from '@/components/layouts/pages-layout'
import RepositoriesList from '@/components/repositories-list'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const Projects = () => {
  const [search, setSearch] = useState('')

  return (
    <PagesLayout>
      <div className='flex items-end justify-between'>
        <h1 className='font-sans font-bold text-4xl -mt-1'>Meus projetos</h1>
        <Input
          className='w-64 h-9'
          placeholder='Filtrar repositórios...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className='flex-1'>
        <RepositoriesList search={search} />
      </section>
    </PagesLayout>
  )
}

export default Projects