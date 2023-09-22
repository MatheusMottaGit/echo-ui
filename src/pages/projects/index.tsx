import RepositoryCard from '@/components/cards/repository-card'
import PagesLayout from '@/components/pages-layout'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const Projects = () => {
  const [search, setSearch] = useState('')

  return (
    <PagesLayout>
      <div className='flex items-center justify-between'>
        <h1 className='font-sans font-bold text-4xl'>Meus projetos</h1>
        <Input
          className='w-64 h-9'
          placeholder='Filtrar repositórios...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className='grid grid-cols-3 gap-3 flex-1'>
        <RepositoryCard search={search} />
      </section>
    </PagesLayout>
  )
}

export default Projects