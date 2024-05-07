import axios from "axios";
import { useEffect, useState } from "react";
import UsePokemonList from "./usePokemonList";


//  Isse id milega uss id ke upar yeh pokemon layega uske type ke upar yeh similar pokemon bhi layega then dono ko page mai print karne ka kaam karega

function usePokemonDetail(id){
    //  Fetching the id from the url params (CustomRoutes mai send kiye the hamne)

    console.log(id);
    
    // For Pokemon
    //  For storing the response data , data ko dekhke hi hame decide karna hota hai , ismai object ke form mai aa rha tha issliye object useState banaye 
    const [pokemon , setPokemon] = useState({});

    const [isLoad , setLoad] = useState(true);


    let pokemonListHookResponse = [];

    // Writing the function
    async function downloadPokemons(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types !== null ? response.data.types[0].type.name : 'fire' }`);


        console.log("Response --> " , response);
        console.log("Similar --> " , pokemonOfSameTypes);


        //  Setting from stratch

        //  Ek bada state variable hai jiske andar hamne sab kuch store karke rkh diya hia !!
        setPokemon({
            name : response.data.name,
            image : response.data.sprites.other.dream_world.front_default,
            weight : response.data.weight,
            height : response.data.height,
            // Yeh array hai issliye
            // Automatically return kar dega 
            //  Op use of javascript 
            types : response.data.types.map((t) => t.type.name),
            similarPokemon : pokemonOfSameTypes.data.pokemon
        })

            // setpokemonListState((state) => ({
            //     ...state , 
            //     type : response.data.types ? response.data.types[0].type.name : ''
            // }))

        // Jab sab kuch set ho gya hai
    }

    //  Passing the custom url of fire type , custom --> self se

    // Jitne parameters function mai chahiye utne pass karna hota hai !!!

    // Joh iska type hai
    // uspar hi api call krna hai
    // By default fire


    const {pokemonListState , setpokemonListState} = UsePokemonList()


    // Kyuki jab bhi click ho toh hame fetch karke laana hai 
    //  Empty array qki hame 1st load mai refresh karna hai 

    useEffect(() => {
        downloadPokemons();
    } , []);

    return {
        pokemon
    }
}

//  Bhai export karna bhi mat bhlna
export default usePokemonDetail;
