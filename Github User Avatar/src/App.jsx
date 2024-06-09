import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import CustomRoutes from './routes/CustomRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Upper Part
    // Search Box
    <div>
      <Search/>

      {/* Routes */}
      <CustomRoutes />
    </div>
  )
}

export default App
