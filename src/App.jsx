import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVech from './components/AddVech'
import ViewVech from './components/ViewVech'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" elemnet={<AddVech />} />
    <Route path="/view" elemnet={<ViewVech />} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
