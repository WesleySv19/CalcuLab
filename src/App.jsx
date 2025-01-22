import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Games from "./pages/Games"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
