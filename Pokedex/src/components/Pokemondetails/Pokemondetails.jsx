//  React Router Dom !!!!

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//  Import karna mat bhulo , bhot time jaata hai debug karne mai !!
import axios from "axios";

// Importing the css
import './pokemondetail.css'
import UsePokemonList from "../../hooks/usePokemonList";
import usePokemonDetail from "../../hooks/usePokemonDetail";


//  React Router dom mai ek aur hook hota hai UseParam

function Pokemondetails({pokemonName}){
    // //  Fetching the id from the url params (CustomRoutes mai send kiye the hamne)
    const {id} = useParams();

    console.log(id);
    
    // // For Pokemon
    // //  For storing the response data , data ko dekhke hi hame decide karna hota hai , ismai object ke form mai aa rha tha issliye object useState banaye 
    // const [pokemon , setPokemon] = useState({});

    // const [isLoad , setLoad] = useState(true);

    // // Writing the function
    // async function downloadPokemons(){
    //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

    //     //  Setting from stratch
    //     setPokemon({
    //         name : response.data.name,
    //         image : response.data.sprites.other.dream_world.front_default,
    //         weight : response.data.weight,
    //         height : response.data.height,
    //         // Yeh array hai issliye
    //         // Automatically return kar dega 
    //         //  Op use of javascript 
    //         types : response.data.types.map((t) => t.type.name)
    //     })

    //     // Jab sab kuch set ho gya hai
    //     setLoad(false);
    //     return response;
    // }

    // //  Passing the custom url of fire type , custom --> self se

    // // Jitne parameters function mai chahiye utne pass karna hota hai !!!

    // // Joh iska type hai
    // // uspar hi api call krna hai
    // // By default fire


    // const {pokemonListState , setpokemonListState} = UsePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types ? pokemon.types[0] : 'fire'}` , true)


    // // Kyuki jab bhi click ho toh hame fetch karke laana hai 
    // //  Empty array qki hame 1st load mai refresh karna hai 

    // useEffect(() => {
    //     downloadPokemons();
    // } , []);  
    //  Hamne custom hooks mai lik diya hai !!!
    const {pokemon} = usePokemonDetail(id , pokemonName);



    return (
        <div className="pokemon-details-wrapper">

            <img src={pokemon.image} alt=""  className="pokemon-image"/>
            <div className="pokemon-name"><span> {pokemon.name} </span></div>
            <div>Height : {pokemon.height} </div>
            <div>Weight : {pokemon.weight} </div>
            
            {
                pokemon.types && pokemon.similarPokemon &&
                <div> More {pokemon.types[0]} type pokemon
                <ul>
                {pokemon.similarPokemon.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
                </div>
            }

        </div>
    );
}
export default Pokemondetails;


/* 
<div className="pokemon-types">
                // {/* Key prop don't forget  */
                // {/* Always all the error can be easily handle by conditional stataments */}

//                 {pokemon.types && pokemon.types.map((t) => <div key={t.name}> {t} </div> )}
//             </div>

// */