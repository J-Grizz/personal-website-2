import { FC } from 'react'
import CloseIcon from 'icons/CloseIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  showSidebar: boolean
  toggleSidebar: () => void
}

const Sidebar: FC<Props> = ({ toggleSidebar, showSidebar }) => {
  return (
    <AnimatePresence>
      {showSidebar && (
        <>
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: '100%',
            }}
            exit={{
              width: 0,
              transition: { duration: 0.3 },
            }}
            onClick={toggleSidebar}
            className={`fixed top-0 right-0 bg-slate-900 bg-opacity-60 h-full z-20 backdrop-filter backdrop-blur-xl`}
          />
          <motion.aside
            initial={{ translateX: '100%' }}
            animate={{
              translateX: '0%',
            }}
            exit={{
              translateX: '100%',
              transition: { duration: 0.3 },
            }}
            className={`fixed top-0 right-0 h-full w-full sm:w-3/5 lg:w-2/5 z-40 bg-space bg-opacity-70 p-10 pl-20 text-white `}
          >
            <CloseIcon className="absolute top-6 right-6 cursor-pointer" onClick={toggleSidebar} />
            <nav className='h-full'>
              <ul className="flex flex-col text-4xl lg:text-5xl h-1/2 lg:h-3/4 justify-around">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blogs">Blogs</Link>
                <a href="https://www.linkedin.com/in/jamesergray" target="_blank">LinkedIn</a>
                <a href="https://github.com/J-Grizz" target="_blank">
                  github
                </a>
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
