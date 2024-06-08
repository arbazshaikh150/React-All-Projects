import axios from "axios";
import { useEffect, useState } from "react";

function GetGalleryImage(id){

    const [individualData , setIndividualData] = useState({
        url : '',
        id : undefined,
        description : "",
        title : "",
    })

    const downLoadIndividual = async (id) => {
        const response = await axios({
            method : 'get',
            url : `https://api.slingacademy.com/v1/sample-data/photos/${id}`
        })
        const result = response.data.photo;
        const objResult = {
            description : result.description,
            id : result.id,
            title : result.title,
            url : result.url
        }
        console.log(objResult);

        setIndividualData(objResult);
    }

    useEffect(() => {
        downLoadIndividual(id)
    } , [individualData.url]);


    // Returning the states
    return {
        individualData ,
        setIndividualData
    }

}
export default GetGalleryImage;