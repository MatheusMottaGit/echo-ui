import { Award, GraduationCap, Languages } from 'lucide-react'
import { Card, CardTitle } from '../ui/card'

const CoursesCard = () => {
  return (
    <Card className='p-3'>
      <CardTitle>Formações e cursos</CardTitle>

      <div className='mt-4 grid grid-cols-2 gap-3 flex-1'>
        <Card className='p-2 flex items-center gap-2 cursor-pointer'>
          <Award className='h-8 w-8' />
          <div className='flex flex-col'>
            <h2>FAETEC - Volta Redonda</h2>
            <span className='text-xs text-muted-foreground'>Técnico - Informática para Internet</span>
          </div>
        </Card>
        <Card className='p-2 flex items-center gap-2 cursor-pointer'>
          <GraduationCap className='h-8 w-8' />
          <div className='flex flex-col'>
            <h2>Unifoa - Volta Redonda</h2>
            <span className='text-xs text-muted-foreground'>Bacharelado - Sistemas de Informação</span>
          </div>
        </Card>
        <Card className='p-2 flex items-center gap-2 cursor-pointer col-span-2'>
          <Languages className='h-8 w-8' />
          <div className='flex flex-col'>
            <h2>Yázigi</h2>
            <span className='text-xs text-muted-foreground'>Inglês - Básico, intermediário e avançado</span>
          </div>
        </Card>
      </div>
    </Card>
  )
}

export default CoursesCard