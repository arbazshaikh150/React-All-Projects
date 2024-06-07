// Passing url as a prop

import axios from "axios";

//  No need to destructure
function GetImage(url){
    // Console. log ki tab yeh aisa aa rha hai pata chala
    const source = url.url;
    console.log(source);
    //  Image printing

    // Return karna nhi bhulna hai mere bhai
    return (
        <div className="w-fit mt-1 mb-1 ml-1">
            <img src={url.url} alt="" height="300px" width="300px"/>
        </div>
    )
}
export default GetImage;