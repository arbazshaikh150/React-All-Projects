import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CustomRoutes from './routes/customRoutes'
import MainGallery from './components/mainGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
        <h1 className='w-fit mx-auto font-semibold my-5 text-xl'> <Link to="/"> Main Gallery Page </Link></h1>

      {/* Adding Our Custom Routes */}
      <CustomRoutes/>
    </div>
  )
}

export default App
