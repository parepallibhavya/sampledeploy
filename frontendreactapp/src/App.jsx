//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter } from "react-router-dom"
import NavBar from "./frontend/NavBar"

function App() {

  return (
       <div>
        <center>
        <h2>React JS with Spring Boot Integration</h2>
        <BrowserRouter basename="/">
        <NavBar/>
        </BrowserRouter>
        </center>
       </div>
  )
}

export default App
