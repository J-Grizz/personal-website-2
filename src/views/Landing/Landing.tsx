import { FC } from 'react'
import Terminal from 'components/Terminal/Terminal'

const Landing: FC = () => {
  return (
    <main className="w-full h-full flex justify-center items-center bg-nature-dark bg-center bg-cover bg-no-repeat">
      <Terminal introLines={["hello James"]} />
    </main>
  )
}

export default Landing
