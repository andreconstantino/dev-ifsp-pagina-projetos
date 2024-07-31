import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import FutManager from './pages/Projects/FutManager'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/futmanager" element={<FutManager />} />
      </Routes>
    </Router>
  )
}
