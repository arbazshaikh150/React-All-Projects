import { useState } from "react";
import Search from "./Search";
import Home from "./home";
import IndividualDetails from "./IndividualDetails";

function SearchDex(){
    const [inputvalue , setInputvalue] = useState("");
    return(
        <div>
            <Search updateSearchTerm={setInputvalue} />

            {
                !inputvalue.length ? <Home /> : <IndividualDetails username={inputvalue} />
            }
        </div>
    )
}
export default SearchDex;