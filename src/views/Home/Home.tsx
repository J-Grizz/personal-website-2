import { FC } from 'react'
import Navigation from 'components/Navigation/Navigation'
import { motion } from 'framer-motion'

const Home: FC = () => {
  return (
    <motion.main
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ y: window.innerHeight, transition: { duration: 0.05 } }}
      className="w-full h-full flex bg-home-background-dark bg-center bg-cover bg-no-repeat"
    >
      <Navigation />
    </motion.main>
  )
}

export default Home
