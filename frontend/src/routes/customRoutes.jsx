//  Another component
// BrowserRouter pure app route mai react route enable kar deta hai (Joh bhi component uske andar wrap hoga )
import {Routes , Route} from 'react-router-dom'
import MainGallery from '../components/mainGallery';
function CustomRoutes(){

    //  Bhai return karna toh mat bhulo yaar!!!!!
    //  React router enabling
    return (
        <Routes>
            <Route path='/' element={<MainGallery />} />
        </Routes>
    )
}
export default CustomRoutes;