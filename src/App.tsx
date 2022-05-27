import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'views/Home/Home'
import Landing from 'views/Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
