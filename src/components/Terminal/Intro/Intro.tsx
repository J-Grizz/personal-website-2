import { FC } from 'react'
import TerminalPromptIcon from 'icons/TerminalPromptIcon'
import { v4 as uuidv4 } from 'uuid'

interface IntroProps {
  introArray: string[]
}

const Intro: FC<IntroProps> = ({ introArray }) => {
  return (
    <>
      {introArray.map((introLine) => (
        <div className="flex items-start" key={uuidv4()}>
          <TerminalPromptIcon />
          <p>{introLine}</p>
        </div>
      ))}
    </>
  )
}

export default Intro
