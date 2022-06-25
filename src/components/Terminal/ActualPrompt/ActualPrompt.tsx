import { FC } from 'react'
import TerminalCursor from 'icons/TerminalCursorIcon'
import TerminalPrompt from 'icons/TerminalPromptIcon'
import { enteredCommand } from '../types'
import { v4 as uuidv4 } from 'uuid'

interface ActualPromptProps {
  showPrompt: boolean
  typedCommand: string
  commandHistory: enteredCommand[]
  inputRef: React.RefObject<HTMLInputElement>
  onTypedCommand: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ActualPrompt: FC<ActualPromptProps> = ({ commandHistory, typedCommand, showPrompt, onTypedCommand, inputRef }) => {
  return (
    <>
      {commandHistory.map((command) => (
        <div className="flex items-center" key={uuidv4()}>
          <TerminalPrompt />
          <p>{command.command}</p>
          {command?.jsx}
        </div>
      ))}

      {/* Actual prompt starts here */}
      {showPrompt && (
        <div className="flex">
          <TerminalPrompt />
          <input onChange={onTypedCommand} ref={inputRef} className="opacity-0 w-0" value={typedCommand} type="text" autoFocus />
          <p>{typedCommand}</p>
          <TerminalCursor blink />
        </div>
      )}
    </>
  )
}

export default ActualPrompt
