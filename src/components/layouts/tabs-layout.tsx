import { ReactNode } from 'react'
import { FileCode2, Tag } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

const TabsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Tabs defaultValue='principais'>
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
      {children}
    </Tabs>
  )
}

export default TabsLayout