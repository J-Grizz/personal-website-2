import { FC } from 'react'
import TerminalPrompt from 'icons/TerminalPromptIcon'
import { v4 as uuidv4 } from 'uuid'

interface IntroProps {
  introArray: string[]
}

const Intro: FC<IntroProps> = ({ introArray }) => {
  return (
    <>
      {introArray.map((introLine) => (
        <div className="flex items-center" key={uuidv4()}>
          <TerminalPrompt />
          <p>{introLine}</p>
        </div>
      ))}
    </>
  )
}

export default Intro
