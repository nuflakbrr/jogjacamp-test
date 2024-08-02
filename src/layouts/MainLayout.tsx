import { FC, ReactNode } from 'react'
import Navbar from '../components/Mixins/Navbar/Navbar'

type Props = {
  children: ReactNode
  typeLayout: string
}

const MainLayout: FC<Props> = ({ children, typeLayout }) => {
  return (
    <>
      <Navbar typeLayout={typeLayout} />
      <main className='max-w-7xl mx-auto'>
        {children}
      </main>
    </>
  )
}

export default MainLayout