import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from 'views/Landing/Landing'
import Home from 'views/Home/Home'
import { AnimatePresence } from 'framer-motion'
import Projects from 'views/Projects/ProjectsIndex'
import Project from 'views/Projects/Project'

const Navigation: FC = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />}>
          <Route path=":projectId" element={<Project />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Navigation
