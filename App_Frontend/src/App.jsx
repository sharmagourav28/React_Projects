import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Main from './Components/Main'
import { initialState, reducer } from './reducer/UseReducer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const userContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <userContext.Provider value={{ state, dispatch }} >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/Main' element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Main' element={<Main />} />
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Services' element={<Services />} />
          </Routes>
          <Footer />
        </BrowserRouter >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </userContext.Provider>
    </>
  )
}

export default App
