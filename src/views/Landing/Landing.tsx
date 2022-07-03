import { FC } from 'react'
import Terminal from 'components/Terminal/Terminal'
import { useFetchIntroLinesQuery } from 'generated/graphql'
import { motion } from 'framer-motion'
import routeTransition from 'variants/routeTransition'

const Landing: FC = () => {
  const { data, loading } = useFetchIntroLinesQuery()

  return (
    <motion.main
      variants={routeTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full flex justify-center items-center bg-landing-background-dark bg-center bg-cover bg-no-repeat"
    >
      <Terminal loading={loading} introLines={data?.allIntroLine} />
    </motion.main>
  )
}

export default Landing
