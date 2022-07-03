import { FC } from 'react'
import Layout from 'components/Layout/Layout'

const About: FC = () => {
  return (
    <Layout backgroundImage='bg-about-background-dark'>
      <div className="text-white flex flex-col items-center">
        <h1 className="text-3xl">Welcome to the about page</h1>
      </div>
    </Layout>
  )
}

export default About
