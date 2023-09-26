import { Boxes, Braces, Codepen, Codesandbox, Database, Figma, FileTerminal, LayoutDashboard, Palette, PenLine, Zap } from 'lucide-react'
import { Card } from '../ui/card'

const SkillsCards = () => {
  return (
    <div className='mt-4 grid grid-cols-6 gap-3 text-sm'>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Boxes className='h-5 w-5' />
        <h2>HTML</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <LayoutDashboard className='h-5 w-5' />
        <h2>CSS</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Braces className='h-5 w-5' />
        <h2>JS</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Codepen className='h-5 w-5' />
        <h2>ReactJs</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Codesandbox className='h-5 w-5' />
        <h2>NextJs</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Database className='h-5 w-5' />
        <h2>NodeJS</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Figma className='h-5 w-5' />
        <h2>Figma</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Palette className='h-5 w-5' />
        <h2>Tailwind</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <Zap className='h-5 w-5' />
        <h2>Vite</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <PenLine className='h-5 w-5' />
        <h2>TS</h2>
      </Card>
      <Card className='flex items-center justify-center px-1 py-2 gap-2 cursor-pointer'>
        <FileTerminal className='h-5 w-5' />
        <h2>Git</h2>
      </Card>
    </div>
  )
}

export default SkillsCards