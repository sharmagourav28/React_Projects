import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addval = () => {
    if (count < 20) {
      setCount(count + 1);
    }

  }
  const subval = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Chai with code</h1>
      <h3>Counter = {count}</h3>
      <button onClick={addval}>Add Num</button>
      <button onClick={subval}>Sub Num</button>
    </>
  )
}

export default App
