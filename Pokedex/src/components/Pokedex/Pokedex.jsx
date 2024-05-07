import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";

// Do enhancement of the UI
// We have the paginated api


// UseEffect hook --> jaise hi component reload hota hai na , iske callbackke andar joh bhi hoga woh saari cheezee execute hogi!

/// Import css
import './pokedex.css'
function Pokedex(){
    return (
        //  Hame card par click karne ke baad ek naya page chahate hai !!
        // State variable op
        <div className="pokedex-wrapper">
        <Search />
        < PokemonList />
        </div>
    )
}
export default Pokedex;