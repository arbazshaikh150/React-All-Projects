import { useState } from "react";
import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";

// Do enhancement of the UI
// We have the paginated api


// UseEffect hook --> jaise hi component reload hota hai na , iske callbackke andar joh bhi hoga woh saari cheezee execute hogi!

/// Import css


//  Yeh decide karega hame pokemon ki list dikhani hai ya koi search wale pokemon ka details dikhani hai!!
// Search component se yaaha par pass karna padega warna nhi ho payega.

// har key strokes par ek network request chale jaa rhi hai.

import './pokedex.css'
import Pokemondetails from "../Pokemondetails/Pokemondetails";
function Pokedex(){
    const [searchTerm , setSearchTerm] = useState('');


    return (
        //  Hame card par click karne ke baad ek naya page chahate hai !!
        // State variable op
        <div className="pokedex-wrapper">
        <Search updateSearchTerm={setSearchTerm}/>
        {/* Based on conditional rendering */}

        {/* Ek baar hi horha hai , ham jab jab input wale ko change kare tab tab change hona chahiye !! , useEffect op and other method is key props , yeh jab bhi hame component ka rerender karna hai based on the changes of some values */}

        {/* Reconsilation Algorithm */}
        {/* Jabbhi ki change hogi rerendering hogi hi hogi!! */}
        {(!searchTerm.length) ? < PokemonList /> : <Pokemondetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}
export default Pokedex;