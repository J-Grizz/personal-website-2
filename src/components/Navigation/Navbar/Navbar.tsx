import { FC } from 'react'
import HamburgerIcon from 'icons/HamburgerIcon'
import TerminalIcon from 'icons/TerminalIcon'
import { Link } from 'react-router-dom'

interface NavbarProps {
  toggleSidebar: () => void
  showSidebar: boolean
}

const Navbar: FC<NavbarProps> = ({ toggleSidebar, showSidebar }) => {
  return (
    <nav className="z-10 w-full h-16 p-2 px-6 flex items-start justify-between bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 text-white">
      <Link className="h-full" to="/home">
        <img className="h-full" src={`${process.env.PUBLIC_URL}/img/sunset-logo.png`} />
      </Link>
      {!showSidebar && (
        <div className="h-full icons-right flex py-2">
          <TerminalIcon className="hidden md:block mr-3" />
          <HamburgerIcon onClick={toggleSidebar} />
        </div>
      )}
    </nav>
  )
}

export default Navbar
