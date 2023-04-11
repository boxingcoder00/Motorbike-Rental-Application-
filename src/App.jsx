import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element= {<Home />} />
      <Route exact path="/dashboard" element= {<Dashboard />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
