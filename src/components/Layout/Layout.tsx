import { FC } from 'react'
import Navigation from 'components/Navigation/Navigation'
import { motion } from 'framer-motion'
import routeTransition from 'variants/routeTransition'

interface LayoutProps {
  backgroundImage: string
}

const Layout: FC<LayoutProps> = ({ children, backgroundImage }) => {
  return (
    <motion.main
      variants={routeTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`w-full h-full flex ${backgroundImage} bg-center bg-cover bg-no-repeat`}
    >
      <div className="fixed w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm">{children}</div>
      <Navigation />
    </motion.main>
  )
}

export default Layout
