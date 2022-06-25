import { FC } from 'react'
import Navigation from 'components/Navigation/Navigation'

const Home: FC = () => {
  return (
    <main className="w-full h-full flex bg-home-background-dark bg-center bg-cover bg-no-repeat">
      <Navigation />
    </main>
  )
}

export default Home
