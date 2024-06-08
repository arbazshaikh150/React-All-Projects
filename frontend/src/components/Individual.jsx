import { useParams } from "react-router";
import GetGalleryImage from "../hooks/ImageById";

function Individual(){
    //  Params se le rha hu
    // Simple competitive programming logic laga rha hu
    // Jaha dikkat pad rhi hia usse change kar de rha hu
    const {id} = useParams();
    const {individualData , setIndividualData} = GetGalleryImage(id);

    //  We can get the id from our params or we can use the props 
    return (
        <div className="w-[90vh] shadow-[0_0_10px_black] w-fit mx-auto flex flex-col items-start justify-center p-5 rounded-lg">
            {/* Printing the image */}
            <img src={individualData.url} alt="Photo" height="400px" width="500px" />
            <h1 className="font-semibold tracking-wider text-lg pt-5"> Title : {individualData.title}</h1>
            <p className=""> <span className="font-semibold tracking-wider text-lg pt-5" > Description :</span> {individualData.description}</p>
        </div>
    )
}
export default Individual;