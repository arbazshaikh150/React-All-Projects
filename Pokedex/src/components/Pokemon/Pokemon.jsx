//// importing the css
import { Link } from 'react-router-dom';
import './pokemon.css'

//  Link Component provide by react router
// Similar to that of <a> tag but woh  page refresh kar rha tha

function Pokemon({name , image , key , id}){
    return (
        <div className='pokemon'>
            {/* On clicking on the pokemon page !! Op logic */  
            // Link href ke jagah to property leta hai
            }
            {/* Sab 2 pe lekar jaa rhe the issliye hame unke id ke zarurat pad rhi hai */}
            {/* Valid javascript In curlies  */}

            {/* Mai toh onCLick soch rha tha !!! hahahaaha! */}
            <Link to={`/pokemon/${id}`}>
            <div className='pokemon-name'>{name}</div>
            <div><img src={image} alt="Hello" className='pokemon-image'/></div>
            </Link>
        </div>
    )
}
export default Pokemon;