import { FC } from 'react'

interface CommandNotFoundJSXProps {
  invalidCommand: string
}

const CommandNotFoundJSX: FC<CommandNotFoundJSXProps> = ({ invalidCommand }) => {
  return (
    <p className="m-2 ml-8">
      command not found: {invalidCommand}
    </p>
  )
}

export default CommandNotFoundJSX
