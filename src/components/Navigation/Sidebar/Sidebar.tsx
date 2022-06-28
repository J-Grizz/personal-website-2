import { FC } from 'react'
import CloseIcon from 'icons/CloseIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { DataLink } from 'components/Navigation/types'
import SidebarNav from './SidebarNav/SidebarNav'

interface SidebarProps {
  showSidebar: boolean
  toggleSidebar: () => void
}

const dataLinks: DataLink[] = [
  { path: '/home', name: 'Home', external: false },
  { path: '/projects', name: 'Work Portfolio', external: false },
  { path: 'https://www.linkedin.com/in/jamesergray', name: 'LinkedIn', external: true },
  { path: 'https://github.com/J-Grizz', name: 'Github', external: true },
]

const Sidebar: FC<SidebarProps> = ({ toggleSidebar, showSidebar }) => {
  return (
    <AnimatePresence>
      {showSidebar && (
        <>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{
              width: 0,
              transition: { duration: 0.3 },
            }}
            onClick={toggleSidebar}
            className={`fixed top-0 right-0 bg-slate-900 bg-opacity-60 h-full z-20 backdrop-filter backdrop-blur-xl`}
          />
          <motion.aside
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0%' }}
            exit={{
              translateX: '100%',
              transition: { duration: 0.3 },
            }}
            className={`fixed top-0 right-0 h-full w-full sm:w-3/5 lg:w-2/5 z-40 bg-space bg-opacity-70 p-10 pl-20 text-white `}
          >
            <CloseIcon className="absolute top-6 right-6 cursor-pointer" onClick={toggleSidebar} />
            <SidebarNav dataLinks={dataLinks} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
