import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setcolor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <h1 className='text-white'>Background Changer</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=' justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("red") }} style={{ backgroundColor: "red" }}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("green") }} style={{ backgroundColor: "green" }}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("yellow") }} style={{ backgroundColor: "Yellow" }}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("pink") }} style={{ backgroundColor: "pink" }}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("blue") }} style={{ backgroundColor: "blue" }}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("black") }} style={{ backgroundColor: "black" }}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("purple") }} style={{ backgroundColor: "purple" }}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => { setcolor("orange") }} style={{ backgroundColor: "orange" }}>Orange</button>

        </div>
      </div>
    </>
  )
}

export default App
