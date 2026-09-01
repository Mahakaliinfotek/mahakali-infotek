import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LegacyLeadershipPage from './LegacyLeadershipPage'
import { Sustainability } from './Sustainability'
import Story from './pages/Story/Story'
import { HomePageLayout } from './layouts/HomePageLayout'
import HomeV1 from './pages/HomeV1'
import SendQuerySection from './components/homepage/SendQuerySection'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/story" element={<Story />} />
        <Route path="/about-us" element={<Story />} />
        <Route path="/" element={<HomePageLayout />}>
          <Route path="/" element={<HomeV1 />} />
          <Route path="/legacy-leadership" element={<LegacyLeadershipPage />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/send-quer" element={<SendQuerySection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />



        </Route>

      </Routes>

    </>
  )
}

export default App
