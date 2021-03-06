import { FC } from 'react'

interface TerminalCursorIconProps {
  blink?: boolean
}

const TerminalCursorIcon: FC<TerminalCursorIconProps> = (props) => {
  return (
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={'h-6 w-6 text-white ' + (props.blink ? 'animate-blinking-cursor' : '')}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4m-7-1v18" />
      </svg>
    </i>
  )
}

export default TerminalCursorIcon
