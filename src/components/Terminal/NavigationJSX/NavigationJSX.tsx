import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ValidCommand } from '../types'

interface NavigationJSXProps {
  validCommands: ValidCommand[]
}

const NavigationJSX: FC<NavigationJSXProps> = ({ validCommands }) => {
  return (
    <div className="m-3 ml-10">
      {validCommands.map((validCommand) => (
        <div className="mb-2 flex flex-col" key={uuidv4()}>
          <p>{validCommand.command}</p>
          <p className="ml-3">- {validCommand.description}</p>
        </div>
      ))}
      <p className='mt-6'>Thats all or now... More commands/interactivity to come in the future</p>
    </div>
  )
}

export default NavigationJSX
