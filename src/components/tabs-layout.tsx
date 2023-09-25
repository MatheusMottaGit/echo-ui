import { ReactNode } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { FileCode2, Tag } from 'lucide-react'

const TabsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Tabs defaultValue='principais'>
      <TabsList className='flex flex-1 justify-around'>
        <TabsTrigger className='w-full gap-2' value='principais'>
          Principais
          <Tag className='w-4 h-4' />
        </TabsTrigger>
        <TabsTrigger className='w-full gap-2' value='outros'>
          Outros
          <FileCode2 className='w-4 h-4' />
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}

export default TabsLayout