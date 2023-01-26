import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react"

export const GlobalCtx = React.createContext(null)

const [gState, setGState] = React.useState({})

function App() {
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
