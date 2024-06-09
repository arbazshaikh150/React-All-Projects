import { useState } from "react";
import useDebounce from "../Hooks/UseDebounce";

function Search({updateSearchTerm}){
    // Handle all the events and debouncing thus state Variable is needed



    const debounce = useDebounce((e) => {
        updateSearchTerm(e.target.value)})

    return (
        <div className="w-fit mx-auto mt-10">
            <input type="text" name="username" id="username" placeholder="Enter Github UserName" className="p-2 rounded-lg font-semibold border text-black" onChange={debounce} />
        </div>
    )
}
export default Search;