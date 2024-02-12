import React from 'react'
import AppRoute from "./Routes"
import { Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="justify-content-center">
          <Navbar.Brand href="/" className="fs-1 mt-5 fw-bold colab-color">Colab</Navbar.Brand>
      </Navbar>
      <AppRoute />
    </div>
  )
}

export default App
