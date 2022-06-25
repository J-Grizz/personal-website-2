import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ValidCommand } from '../types'

interface HelpJSXProps {
  validCommands: ValidCommand[]
}

const HelpJSX: FC<HelpJSXProps> = ({ validCommands }) => {
  return (
    <div className="m-3 ml-10">
      {validCommands.map((validCommand) => (
        <div className="mb-2 flex flex-col" key={uuidv4()}>
          <p>{validCommand.command}</p>
          <p className="ml-3">- {validCommand.description}</p>
        </div>
      ))}
    </div>
  )
}

export default HelpJSX
