import Login from "./components/Login"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
