import { FC } from 'react'
import Terminal from 'components/Terminal/TerminalClass'

const Landing: FC = () => {
  return (
    <main className="w-full h-full flex justify-center items-center bg-nature-dark bg-center bg-cover bg-no-repeat">
      <Terminal />
    </main>
  )
}

export default Landing
