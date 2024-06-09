import axios from "axios";
import { useEffect, useState } from "react";

function getIndividual(username){
    // console.log("username " , username);
    const [dataUrl , setDataUrl] = useState("");
    async function downloadOne(){
        const response = await axios({
            method : 'get',
            url : `https://api.github.com/users/${username}`
        })
        //  I will add the follower and following afterwards
        const result = response.data.avatar_url;
        setDataUrl(result);
    }

    useEffect(() => {
        downloadOne();
    } , []);

    return {
        dataUrl ,
        setDataUrl
    }

}
export default getIndividual;