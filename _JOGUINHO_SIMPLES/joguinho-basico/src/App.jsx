import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joguin from './components/Joguin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Money Money</h1>
      <Joguin/>
    </>
  )
}

export default App
