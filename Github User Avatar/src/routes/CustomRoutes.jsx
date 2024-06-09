import {Routes , Route} from 'react-router-dom'
import Home from '../components/home';

function CustomRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    )
}
export default CustomRoutes;