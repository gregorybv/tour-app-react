import { useEffect } from "react"
import Aos from "aos"

import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
