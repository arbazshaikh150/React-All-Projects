import { useEffect, useState } from "react";

import axios from 'axios';

// For fetching we use axios

/// Css
import './pokemonlist.css'
import Pokemon from "../Pokemon/Pokemon";

//  Console.log karke sab check karte rhna chahiye !!!

function PokemonList(){

    
    const [x , setX] = useState(0);

    const [pokemonList , setPokemonList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    const [nextUrl , setNextUrl] = useState("");
    const [prevUrl , setprevUrl] = useState("");
    // Hook
    // Two argument , 1 Callback and dependency array !!

    /// Empty array bas 1st render pe hoga tohi 
    // Agar ko state variable ke wajah se component rerender hua toh usse ham dependency array mai daal denge!


    // useEffect(() => {
    //     console.log("Effect called");
    // } , [x]);

    /// For implementing the next and previous jab bhi next aur previous click ho tab ham isse change kar denge !!
    const [pokedoxUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    async function downloadPokemon(){
        //// Jaise hi downloading start waise hi , loading true ho jayega
        setIsLoading(true);

        
        const response = await axios.get(pokedoxUrl);
        // Api ke response ko ache se dekho

        // Finally the api is downloaded
        setIsLoading(false);


        /// For further use we can store it in array!
        /// Formed using clg
        const pokemonResult = response.data.results;


        ////Setting the url for the next and the prev one
        setNextUrl(response.data.next);
        setprevUrl(response.data.previous);

        /// Now we have to iterate over all the element (pokemon) in our array


        // Error aa rha tha agar one line mai arrow function toh no need of return , warna return likhna zaruri hai !!

        const pokemonResultPromise = pokemonResult.map((pokemon) => {
            return axios.get(pokemon.url);
        })

        /// Axios function , jab array of promises pass karenge tab jab tak pura ho na jaaye tab tak wait karega
        const pokemonData = await axios.all(pokemonResultPromise);

        /// Got all the details of that url and store in the given array !!


        /// Saving the pokemon data
        const res =  pokemonData.map((pokedata) => {
            const pokemon = pokedata.data;
            return {
                id : pokemon.id,
                name : pokemon.name,
                // Got this using the console log and taking the necessary relevant information
             image: (pokemon.sprites.other) ?pokemon.sprites.other.dream_world.front_default : './Arbaz.jpg',

             types:pokemon.types,
            }
        });

        setPokemonList(res);


        //// Also we have response.data mai next and previous url wala bhi hai !!
        console.log(res);
    }

    // Ismain directly async await mat karo --> warning aa rha tha , try to use as many function as you can!!


    useEffect(() => {
        // Fetching the api data
        downloadPokemon();
    } , [pokedoxUrl])// Jab bhi next aur previous click ho !!
    return(
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
            {(isLoading ) ? "Loading.." : 
            pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
            }
            </div>

            {/* Adding Buttons */}
            <div className="controls">
              <button className="prev" disabled={prevUrl === null} onClick={() => {
                setPokedexUrl(prevUrl)
              }}>Previous</button>  
              <button className="next" disabled={nextUrl === null} onClick={() => {
                // Jaise hi pokedex ka url change hoga waise hi useeffect wapas call hoga !!
                setPokedexUrl(nextUrl)
              }}
              >Next</button>
            </div>
        </div>
    )

    // Adding the details of the pokemon once i will click on the card
    //  Click --> Network Request --> Adding it on our webpage
}
export default PokemonList;