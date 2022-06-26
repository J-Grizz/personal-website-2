import { FC } from 'react'
import HamburgerIcon from 'icons/HamburgerIcon'
import TerminalIcon from 'icons/TerminalIcon'

interface Props {
  toggleSidebar: () => void
  showSidebar: boolean
}

const Navbar: FC<Props> = ({ toggleSidebar, showSidebar }) => {
  return (
    <nav className="z-10 w-full h-16 p-5 flex items-start justify-between bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 text-white">
      <div>My Logo.. ?</div>
      {!showSidebar && (
        <div className="icons-right flex">
          <TerminalIcon className="hidden md:block mr-3" />
          <HamburgerIcon onClick={toggleSidebar} />
        </div>
      )}
    </nav>
  )
}

export default Navbar
