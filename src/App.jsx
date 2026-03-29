import { useRef, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Mission from './pages/Mission'
import Research from './pages/Research'
import Team from './pages/Team'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitioning, setTransitioning] = useState(false)
  const prevKey = useRef(location.key)

  useEffect(() => {
    if (location.key !== prevKey.current) {
      prevKey.current = location.key
      setTransitioning(true)
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitioning(false)
      }, 250)
      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <div className={`route-transition ${transitioning ? 'route-transition--exit' : 'route-transition--enter'}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  )
}
