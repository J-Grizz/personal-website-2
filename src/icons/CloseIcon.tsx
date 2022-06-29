import { FC } from 'react'

const CloseIcon: FC<React.HTMLAttributes<SVGSVGElement>> = ({ onClick, className }) => {
  return (
    <i>
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </i>
  )
}

export default CloseIcon
