import DummyUser from "../Hooks/DummyUser";
import Individual from "./Individual";

function Home(){
    const {user , setUser} = DummyUser();
    
    return (
        <div>
            {/* Printing Individual images */}
        <div className="flex flex-wrap mt-4">
            {
                user && 
                user.map((e) => <Individual key={e.url} url={e} />)
            }
        </div>
        </div>
    )
}
export default Home;