import { FC } from 'react'
import { Link } from 'react-router-dom'

interface NavigationJSXProps {}

const NavigationJSX: FC<NavigationJSXProps> = () => {
  return (
    <div className="m-3 ml-10">
      <Link to="/">home?</Link>
      <Link to="/home">Home!</Link>
    </div>
  )
}

export default NavigationJSX
