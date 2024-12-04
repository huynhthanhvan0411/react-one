import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/FormLogin/FormLogin.tsx'
import "./i18n.ts"; 

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="">
      <Login/>
      </div>
  )
}

export default App
