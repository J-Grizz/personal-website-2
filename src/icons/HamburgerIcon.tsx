import { FC } from 'react'

const HamburgerIcon: FC<React.HTMLAttributes<SVGSVGElement>> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default HamburgerIcon
