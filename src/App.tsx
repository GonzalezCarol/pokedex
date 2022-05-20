import { useState } from 'react'
import logo from './logo.svg'
import './global.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
