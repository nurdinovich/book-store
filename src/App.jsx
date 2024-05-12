import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HeaderNav from './Components/HeaderNav/HeaderNav'
import { Home, Main } from './pages'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route>
          <Route path="/" element={<HeaderNav/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/main" element={<Main/>} />    
            <Route path="/*" element={<div>not faunt</div>}/>
            </Route> 
          </Route>
        </Routes>
    </Router>
  )
}

export default App