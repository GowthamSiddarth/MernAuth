import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './auth/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
      </div>
    </BrowserRouter>
  )
}

export default App
