import { FC } from 'react'
import Layout from 'components/Layout/Layout'

const Home: FC = () => {
  return (
    <Layout backgroundImage='bg-projects-background-dark'>
      <div className="text-white flex flex-col items-center">
        <h1 className="text-3xl">Welcome to a single project page</h1>
      </div>
    </Layout>
  )
}

export default Home
