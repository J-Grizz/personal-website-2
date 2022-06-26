import { FC } from 'react'
import Navbar from 'components/Navigation/Navbar/Navbar'
import Sidebar from 'components/Navigation/Sidebar/Sidebar'
import { useCycle } from 'framer-motion'

const Navigation: FC = () => {
  const [showSidebar, toggleSidebar] = useCycle(false, true)


  return (
    <div className="w-full">
      <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Navigation
