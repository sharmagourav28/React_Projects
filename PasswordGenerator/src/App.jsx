import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [len, setlen] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  const [password, setpassword] = useState("")

  //ref hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numallow) str += "0123456789"
    if (charallow) str += "!@#$%^&*()/*-"

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [len, numallow, charallow, setpassword])
  const copypasswordclip = useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0, 10);
    window.navigator, Clipboard.writetext(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [len, numallow, charallow, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-700 text-orange-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none rounded-lg w-full py-1 px-3 my-5' placeholder='password' readOnly ref={passwordref} />
          <button onClick={copypasswordclip} className='outline-none rounded-3xl bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={len} className='cursor-pointer' onChange={(e) => {
              setlen(e.target.value)
            }} />
            <label>length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numallow} id='numberInput' onChange={() => {
              setnumallow((prev) => !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charallow} id='charInput' onChange={() => {
              setcharallow((prev) => !prev);
            }} />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
