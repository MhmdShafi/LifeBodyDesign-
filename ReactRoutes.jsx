import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './src/components/Home'

const ReactRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default ReactRoutes