import { FC } from 'react'
import Topbar from 'components/Navigation/Topbar/Topbar'
import Sidebar from 'components/Navigation/Sidebar/Sidebar'
import { useCycle } from 'framer-motion'

const Navigation: FC = () => {
  const [showSidebar, toggleSidebar] = useCycle(false, true)


  return (
    <div className="w-full">
      <Topbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Navigation
