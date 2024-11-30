import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import FutManager from './pages/Projects/FutManager'
import FakeNewsAnalyzer from './pages/Projects/FakeNewsAnalyzer'
import FakeNewsBook from './pages/Projects/FakeNewsBook'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/futmanager" element={<FutManager />} />
        <Route path="/FakeNewsAnalyzer" element={<FakeNewsAnalyzer />} />
        <Route path="/FakeNewsBook" element={<FakeNewsBook />} />
      </Routes>
    </Router>
  )
}
