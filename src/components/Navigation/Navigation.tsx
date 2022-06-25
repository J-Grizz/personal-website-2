import { FC, useState } from 'react'
import Navbar from 'components/Navigation/Navbar/Navbar'
import Sidebar from 'components/Navigation/Sidebar/Sidebar'

const Navigation: FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }
  return (
    <div className="w-full">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Navigation
