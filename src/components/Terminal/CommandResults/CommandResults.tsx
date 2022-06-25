import { FC } from 'react'
import TerminalPrompt from 'icons/TerminalPromptIcon'
import { EnteredCommand } from '../types'
import { v4 as uuidv4 } from 'uuid'

interface CommandResultsProps {
  enteredCommands: EnteredCommand[]
}

const CommandResults: FC<CommandResultsProps> = ({ enteredCommands }) => {
  return (
    <>
      {enteredCommands.map((command) => (
        <div className="flex flex-col justify-center" key={uuidv4()}>
          <div className='flex'>
            <TerminalPrompt />
            <p>{command.command}</p>
          </div>
          {command?.jsx}
        </div>
      ))}
    </>
  )
}

export default CommandResults
