import { FC } from 'react'
import TerminalCursor from 'icons/TerminalCursorIcon'
import TerminalPrompt from 'icons/TerminalPromptIcon'

interface ActualPromptProps {
  showPrompt: boolean
  typedCommand: string
  inputRef: React.RefObject<HTMLInputElement>
  onTypedCommand: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ActualPrompt: FC<ActualPromptProps> = ({ typedCommand, showPrompt, onTypedCommand, inputRef }) => {
  return (
    <>
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
