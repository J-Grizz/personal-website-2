import { FC } from 'react'
import Navigation from 'components/Navigation/Navigation'
import { motion } from 'framer-motion'
import Emoji from 'icons/Emoji'

const Home: FC = () => {
  return (
    <motion.main
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ y: window.innerHeight, transition: { duration: 0.05 } }}
      className="w-full h-full flex bg-home-background-dark bg-center bg-cover bg-no-repeat"
    >
      <div className="fixed w-full h-full backdrop-filter backdrop-blur-sm">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-white flex flex-col items-center">
            <h1 className="text-3xl">Hi, Im James Gray, a professional web developer</h1>{' '}
            <Emoji className='text-3xl mt-8' label="waving hand emoji" symbol="👋" />
          </div>
        </div>
      </div>
      <Navigation />
    </motion.main>
  )
}

export default Home
