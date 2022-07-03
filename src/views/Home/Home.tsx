import { FC } from 'react'
import { Link } from 'react-router-dom'
import Layout from 'components/Layout/Layout'

const Home: FC = () => {
  return (
    <Layout backgroundImage='bg-home-background-dark'>
      <div className="relative flex flex-col items-start w-4/5">
        <h1 className="text-8xl drop-shadow-lg text-slate-100 text-white-500 leading-relaxed">
          Hi, I'm James Gray, a professional full-stack web developer
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
    </Layout>
  )
}

export default Home
