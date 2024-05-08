
import { useState } from 'react';
import './search.css'
import useDebounce from '../../hooks/useDebounce';

// Search based on the typing og the user (No need to press submit button)
// Based on key strokes (Input main onChange karke ek attribute hota hai  jisse ham yeh easily kar sakte hai!!)

//  Har par network call ho rha hai, resolve Debouncing


// Waha se (pokedex se hi bhej de rhe hai , abb koi naya state variable banane ki koi zarurat nhi hai)

// Pokedex ka state variable yaha se uska value update kar rha hai !!!
function Search({updateSearchTerm}){
    //  Maintaining the state variable
    // const [searchTerm , setSearchTerm] = useState('');

    // Search term execute with the debounce!!
    const debounce = useDebounce((e) => {
        updateSearchTerm(e.target.value)})

    return (
        <div className="search-wrapper">
            <input
            id="pokemon-name-search"
                type="text"
                placeholder="pokemon name"

                onChange={debounce
                }
            />
        </div>
    )
}
export default Search;