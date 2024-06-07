import { useState } from "react";
import axios from 'axios'
import GetImage from "./images";
import DownloadImages from "../hooks/downloadImg";
import CheckFetch from "./checkFetching";
function MainGallery(){
    // Storing all the states , here states are required

    // Array of url
    //  Hooks se le rhe hai , dhyaan se ky bhej rha ho aur ky le rhe ho, {} , [] error

    // Name same hone chahiye , named export ke time par
    const {getData , setData} = DownloadImages();
    console.log(getData);
    return (
        <div className="flex flex-wrap ">
            {
                getData.list.map((e) => <GetImage key={e} url={e}>{e}</GetImage>)
            }
        </div>
    )
}
export default MainGallery;