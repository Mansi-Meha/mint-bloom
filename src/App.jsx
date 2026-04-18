import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage'
import StoriesPage from './Components/Pages/StoriesPage'
import ScrollToHash from './Components/ScrollToHash'

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stories" element={<StoriesPage />} />
      </Routes>
    </Router>
  )
}

export default App
         
              
  