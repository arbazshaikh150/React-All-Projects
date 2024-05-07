
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'



function App() {

  return (
    <div className='outer-pokedex'>

    {/* Agar hame koi component chahiye joh har route par show kare toh hame customRoute ke upar likh sakte hia !! */}

{/* Adding link to go back to home */}
    <h1 id="pokedex-heading">
      <Link to='/'>Pokedex</Link> 
    </h1>

{/*       Jab routes nhi bana tha tab
        <Pokedex /> */}
        {/* Now custom routes op */}
        <CustomRoutes />
    </div>
  )
}

export default App
