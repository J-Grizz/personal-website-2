import { FC } from 'react'
import Navigation from 'components/Navigation/Navigation'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <motion.main
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ y: window.innerHeight, transition: { duration: 0.05 } }}
      className="w-full h-full flex bg-home-background-dark bg-center bg-cover bg-no-repeat"
    >
      <div className="fixed w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm">
        <div className="relative flex flex-col items-start w-4/5">
          <h1 className="text-8xl drop-shadow-lg text-slate-100 text-white-500 leading-relaxed">
            Hi, I'm James Gray, a professional full stack web developer
          </h1>
          <div className="mt-24">
            <Link
              to="/about"
              className="relative p-5 mr-8 text-slate-100 transition-all ease-in duration-150 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-1 before:bg-black before:opacity-30 hover:before:opacity-0 hover:before:scale-0 before:ease-in before:duration-150 after:absolute after:top-0 after:left-0 after:z-index-1 after:w-full after:h-full after:scale-110 after:opacity-0 after:border-2 after:border-slate-100 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in after:duration-150"
            >
              <span className="">Find out more about me</span>
            </Link>
            <Link
              to="/projects"
              className="relative p-5 text-slate-100 transition-all ease-in duration-150 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-1 before:bg-black before:opacity-30 hover:before:opacity-0 hover:before:scale-0 before:ease-in before:duration-150 after:absolute after:top-0 after:left-0 after:z-index-1 after:w-full after:h-full after:scale-110 after:opacity-0 after:border-2 after:border-slate-100 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in after:duration-150"
            >
              <span className="">Checkout my work</span>
            </Link>
          </div>
        </div>
      </div>
      <Navigation />
    </motion.main>
  )
}

export default Home
