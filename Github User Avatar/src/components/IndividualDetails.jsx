import getIndividual from "../Hooks/useIndividual";
import Individual from "./Individual";

function IndividualDetails({username}){
    const {dataUrl , setDataUrl} = getIndividual(username);
    console.log("dataUrl -> " , dataUrl);
    return(
        <div>
            <img src={dataUrl} alt="Image" width="300px" height="300px" className="w-fit mx-auto mt-4 rounded-full"/>
            <h1 className="w-fit mx-auto mt-4 font-bold tracking-wider" >{username}</h1>
        </div>
    )
}
export default IndividualDetails;