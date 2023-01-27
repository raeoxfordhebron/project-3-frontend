import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const GlobalCtx = React.createContext(null)
const [gState, setGState] = React.useState({url: "https://project-3-frontend-uxxk.onrender.com"})


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
