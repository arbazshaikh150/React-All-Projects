//  Another component
// BrowserRouter pure app route mai react route enable kar deta hai (Joh bhi component uske andar wrap hoga )
import {Routes , Route} from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex';
import Pokemondetails from '../components/Pokemondetails/Pokemondetails';

function CustomRoutes(){

    //  React router enabling
    return (
        <Routes>
            {/* Internally kuch bunch of component lega*/}
            {/* Konse path mai konsa component render hona chahiye !!! */}
            {/* <Route path='/' element={}> */}

            {/* Error aa rha tha  */}

            {/* <Route path='/' element={Pokedex} /> */}

            {/* Correct */}

            <Route path='/' element={<Pokedex />} />


            {/* :id , id variable hai means kuch bhi aa sakta hai */}
            <Route path='/pokemon/:id' element={<Pokemondetails />} />
        </Routes>
    )
}
export default CustomRoutes;