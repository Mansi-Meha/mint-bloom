import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage'
import StoriesPage from './Components/Pages/StoriesPage'
import LoginPage from './Components/Pages/LoginPage'
import JoinPilotPage from './Components/Pages/JoinPilotPage'
import ScrollToHash from './Components/ScrollToHash'

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join-pilot" element={<JoinPilotPage />} />
      </Routes>
    </Router>
  )
}

export default App
         
              
  