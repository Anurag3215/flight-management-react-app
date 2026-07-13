import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AddFlights from './components/AddFlights'
import ViewFlights from './components/ViewFlights'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddFlights />} />
        <Route path='/view' element={<ViewFlights />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
