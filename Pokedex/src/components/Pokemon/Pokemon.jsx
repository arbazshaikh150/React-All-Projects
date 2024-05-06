//// importing the css
import './pokemon.css'

function Pokemon({name , image}){
    return (
        <div className='pokemon'>
            <div className='pokemon-name'>{name}</div>
            <div><img src={image} alt="Hello" className='pokemon-image'/></div>
        </div>
    )
}
export default Pokemon;