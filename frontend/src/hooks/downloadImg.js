import axios from "axios";
import { useEffect, useState } from "react";

function DownloadImages(){
    const [getData , setData] = useState({
        list : [],
        mainUrl : "",
    });
    const getResponse = async () => {
        const response = await axios({
            method : 'get' , // Default
            url : 'https://api.slingacademy.com/v1/sample-data/photos?limit=12',
        })
        const result = response.data.photos.map((e) => e.url);
        setData((state) => ({...state , list: result}));
        // Store the url of all the images 
        //  We have to make sure that we are using it properly
        // console.log(result);
    }

    useEffect(() => {
        getResponse()
    } , [getData.mainUrl]);
    return {
        getData,
        setData
    }

}
export default DownloadImages;