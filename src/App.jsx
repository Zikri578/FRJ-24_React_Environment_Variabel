import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Blog from './pages/Blog'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  )
}
