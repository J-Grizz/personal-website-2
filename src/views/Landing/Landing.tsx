import { FC } from 'react'
import Terminal from 'components/Terminal/Terminal'
import { useFetchIntroLinesQuery } from 'generated/graphql'
import { motion } from 'framer-motion'

const Landing: FC = () => {
  const { data, loading } = useFetchIntroLinesQuery()

  return (
    <motion.main
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ y: window.innerHeight, transition: { duration: 0.05 } }}
      className="w-full h-full flex justify-center items-center bg-landing-background-dark bg-center bg-cover bg-no-repeat"
    >
      <Terminal loading={loading} introLines={data?.allIntroLine} />
    </motion.main>
  )
}

export default Landing
