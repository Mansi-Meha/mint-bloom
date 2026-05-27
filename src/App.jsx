import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage'
import StoriesPage from './Components/Pages/StoriesPage'
import LoginPage from './Components/Pages/LoginPage'
import JoinPilotPage from './Components/Pages/JoinPilotPage'
import AfterLogin from './Components/AfterLogIN/AfterLogin'
import OverView from './Components/AfterLogIN/OverView'
import ProfileMgmt from './Components/AfterLogIN/ProfileMgmt'
import ProductCatalogue from './Components/AfterLogIN/ProductCatalogue'
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

        {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<AfterLogin />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<OverView />} />
          <Route path="profile" element={<ProfileMgmt />} />
          <Route path="products" element={<ProductCatalogue />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App