import { useState } from "react";
import axios from 'axios'
import GetImage from "./images";
import DownloadImages from "../hooks/downloadImg";
import CheckFetch from "./checkFetching";
import { Link } from "react-router-dom";
function MainGallery(){
    // Storing all the states , here states are required

    // Array of url
    //  Hooks se le rhe hai , dhyaan se ky bhej rha ho aur ky le rhe ho, {} , [] error

    // Name same hone chahiye , named export ke time par
    const {getData , setData} = DownloadImages();
    console.log(getData);
    return (

        // We have to add on click event (or we can use Link !!!)
        <div className="flex flex-wrap ">
            {
                getData.list.map((e) => <Link to={`/images/${e.id}`} key={e.url} > <GetImage url={e.url}></GetImage> </Link>)
            }
        </div>
    )
}
export default MainGallery;