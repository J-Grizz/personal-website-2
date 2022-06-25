import { FC } from 'react'
import TerminalPrompt from 'icons/TerminalPromptIcon'
import { enteredCommand } from '../types'
import { v4 as uuidv4 } from 'uuid'

interface CommandResultsProps {
  enteredCommands: enteredCommand[]
}

const CommandResults: FC<CommandResultsProps> = ({ enteredCommands }) => {
  return (
    <>
      {enteredCommands.map((command) => (
        <div className="flex items-center" key={uuidv4()}>
          <TerminalPrompt />
          <p>{command.command}</p>
          {command?.jsx}
        </div>
      ))}
    </>
  )
}

export default CommandResults
