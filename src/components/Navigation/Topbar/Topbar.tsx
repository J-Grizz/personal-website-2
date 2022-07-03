import { FC, useState } from 'react'
import HamburgerIcon from 'icons/HamburgerIcon'
import TerminalIcon from 'icons/TerminalIcon'
import { Link } from 'react-router-dom'

interface TopbarProps {
  toggleSidebar: () => void
  showSidebar: boolean
}

const Topbar: FC<TopbarProps> = ({ toggleSidebar, showSidebar }) => {
  const [hamburgerNoticed, setHamburgerNoticed] = useState(false)

  const handleHamburgerClick = () => {
    setHamburgerNoticed(true)
    toggleSidebar()
  }
  return (
    <div className="z-10 w-full h-16 p-2 px-6 flex items-start justify-between bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 text-white">
      <Link className="h-full" to="/home">
        <img className="h-full" alt="sunset logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} />
      </Link>
      {!showSidebar && (
        <div className="h-full icons-right flex py-2">
          <TerminalIcon className="hidden" />
          <HamburgerIcon className={`${hamburgerNoticed ? '' : 'animate-bounce'}`} onClick={handleHamburgerClick} />
        </div>
      )}
    </div>
  )
}

export default Topbar
