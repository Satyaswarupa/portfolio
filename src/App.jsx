import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Pages/Home'
import Footer from './components/Pages/Footer'




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App