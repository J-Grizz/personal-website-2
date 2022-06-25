import { FC } from 'react'
import CloseIcon from 'icons/CloseIcon'

interface Props {
  showSidebar: boolean
  toggleSidebar: () => void
}

// Links:

// Home
// About
// Projects
// Blogs
// LinkedIn
// Github

const Sidebar: FC<Props> = ({ toggleSidebar, showSidebar }) => {
  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`fixed top-0 right-0 bg-slate-900 bg-opacity-60 w-full h-full z-20 backdrop-filter backdrop-blur-xl ease-in-out duration-200 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      />
      <aside
        className={`fixed top-0 right-0 w-[100vw] sm:w-[55vw] lg:w-[35vw] bg-gradient-to-t from-burnt-orange via-twilight to-space p-10 pl-20 text-white h-full z-40 ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <CloseIcon className="absolute top-6 right-6 cursor-pointer" onClick={toggleSidebar} />
        <nav>
          <ul className="flex flex-col">{/* Loop through links here */}</ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
