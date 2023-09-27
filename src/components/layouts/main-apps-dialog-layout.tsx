import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'

interface DialogProps {
  children: ReactNode,
  video?: string,
  title: string,
  description: string
}

const MainAppsDialogLayout = ({ children, title, description }: DialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className='hover:opacity-70 transition-all'>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>

        {/* <video src={video}
          autoPlay={true}
          controls
          className='h-[505px] w-full'
        ></video> */}
      </DialogContent>
    </Dialog>
  )
}

export default MainAppsDialogLayout