import axios from "axios";
import { useEffect, useState } from "react";

function DownloadImages(){
    const [getData , setData] = useState({
        list : [{
            url : "",
            id : undefined
        }],
        mainUrl : "",
    });

    //  For previous and next we can make a usestate so that we can play with the offset
    const getResponse = async () => {
        const response = await axios({
            method : 'get' , // Default
            url : 'https://api.slingacademy.com/v1/sample-data/photos?limit=12',
        })
        //  Instead of storing the url we can store the id , and again fetch with the help of id

        //  Op use of maps (key and value)
        const result = response.data.photos.map((e) => {
            return {url : e.url , id : e.id};
        });
        setData((state) => ({...state , list : result}));
        // Store the url of all the images 
        //  We have to make sure that we are using it properly
        console.log(result);
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