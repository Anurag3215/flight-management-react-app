import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AddFlights from './components/AddFlights'
import ViewFlights from './components/ViewFlight'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavBar />
        <main className="content-area">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<AddFlights />} />
            <Route path='/view' element={<ViewFlights />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
