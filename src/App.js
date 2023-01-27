import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react"
import {useState} from "react"

export const GlobalCtx = React.createContext(null)


function App() {
  const [gState, setGState] = React.useState({url: "http://localhost:3000"})
  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </GlobalCtx.Provider>
  )
}

export default App
