//  For making function testable
// PokemonList mai bhot zyada logic likh dite hai hamne

import axios from "axios";
import { useEffect, useState } from "react";

//  Abb jaha se bhi isse call karenge waha se url send karenge then we can print as they want!!

// Jab yeh function ko call karenge ham url de denge

//  Invariant --> type value agar true hai toh hame type wala hi chahiye warna hame saare pokemon chahiye !!
function UsePokemonList(){
    const [pokemonListState , setpokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedoxUrl: 'https://pokeapi.co/api/v2/pokemon' ,
        nextUrl : '',
        prevUrl: ''
    }) 

    async function downloadPokemon(){
        
        // if(pokemonListState.type){
        //   const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonListState.type}`)  


        //     // Maine phle wale file mai already commit kar rha hai waha se check kar lena ek baar agar kuch smjh nhi aaye toh !!!

        //     // response.data.pokemon mai type ke saare pokemon ka result aa jaata hai

        //     // Slice initial ke 10 pokemon chahiye 
        //     setpokemonListState((state) => ({
        //         ...state , pokemonList : response.data.pokemon.slice(0 , 10)
        //     }))
        // }
        // else{
            //// Jaise hi downloading start waise hi , loading true ho jayega

        // setIsLoading(true);
        
        setpokemonListState((state) => ({...state , isLoading: true}));

        
        // const response = await axios.get(pokedoxUrl);

        const response = await axios.get(pokemonListState.pokedoxUrl);

        // Api ke response ko ache se dekho

        // Finally the api is downloaded

        // setIsLoading(false);

        //  Yaha par karne ki zarurat nhi h qki hame sab download hone ke baad isse false karna hai , aur yeh cursor blinking ka bhi problem de rha tha !!!

        // setpokemonListState((state) => ({...state , isLoading : false}));


        /// For further use we can store it in array!
        /// Formed using clg
        const pokemonResult = response.data.results;


        ////Setting the url for the next and the prev one
        // setNextUrl(response.data.next);

        setpokemonListState((state) => ({...state , nextUrl: response.data.next , prevUrl: response.data.previous}));

        // setprevUrl(response.data.previous);

        //  Upar already ek mai kar diya hu !
        // setpokemonListState({ ...pokemonListState , prevUrl: response.data.previous});


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
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : './Arbaz.jpg',

                types:pokemon.types,
                }
            });

            // setPokemonList(res);

            setpokemonListState((state) => ({...state , pokemonList : res , isLoading : false}));



            //// Also we have response.data mai next and previous url wala bhi hai !!
            console.log(res);
        // }
    }

    useEffect(() => {
        // Fetching the api data
        downloadPokemon();
    } , [pokemonListState.pokedoxUrl])// Jab bhi next aur previous click ho !!

    return {
        pokemonListState,
        setpokemonListState
    }
}
export default UsePokemonList;