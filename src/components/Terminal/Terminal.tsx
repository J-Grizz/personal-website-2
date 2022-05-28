import { FC, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const Terminal: FC = () => {
  const [isShowing, setIsShowing] = useState(true)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShowing((isShowing) => !isShowing)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <div className="w-2/3 h-2/3 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded">
      <div className="flex items-center h-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

		<p className='text-white'>Hello.. Fancy meeting you here...</p>

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
      </div>
    </div>
  )
}

export default Terminal
