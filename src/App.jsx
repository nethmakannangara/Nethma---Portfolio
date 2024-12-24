import { useState } from 'react'
import './App.css'
import Home_page from './pages/home-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home_page />
    </>
  )
}

export default App
