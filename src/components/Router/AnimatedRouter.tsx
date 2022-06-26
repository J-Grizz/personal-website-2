import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from 'views/Landing/Landing'
import Home from 'views/Home/Home'
import { AnimatePresence } from 'framer-motion'

const Navigation: FC = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="projects" element={<Projects />}>
          <Route path=":projectId" />
        </Route>
        <Route path="blogs" element={<Blogs />}>
          <Route path=":blogId" />
        </Route> */}
      </Routes>
    </AnimatePresence>
  )
}

export default Navigation
