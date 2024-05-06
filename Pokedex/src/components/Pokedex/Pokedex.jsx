import PokemonList from "../PokemonList/Pokemonlist";
import Search from "../Search/Search";

// Do enhancement of the UI
// We have the paginated api


// UseEffect hook --> jaise hi component reload hota hai na , iske callbackke andar joh bhi hoga woh saari cheezee execute hogi!

/// Import css
import './pokedex.css'
function Pokedex(){
    return (
        <div className="pokedex-wrapper">
        <h1 id="pokedex-heading">Pokedex</h1>
        <Search />
        < PokemonList />
        </div>
    )
}
export default Pokedex;