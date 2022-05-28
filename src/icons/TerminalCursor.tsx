import { FC, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const TerminalCursor: FC = () => {
  // Should pass this as a prop from the Terminal component
  const [isShowing, setIsShowing] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsShowing((isShowing) => !isShowing)
    }, 900)
  }, [])

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4m-1-1v18" />
      </svg>
    </Transition>
  )
}

export default TerminalCursor
