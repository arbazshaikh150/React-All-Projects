//  Another component
// BrowserRouter pure app route mai react route enable kar deta hai (Joh bhi component uske andar wrap hoga )
import {Routes , Route} from 'react-router-dom'
import MainGallery from '../components/mainGallery';
import Individual from '../components/Individual';
function CustomRoutes(){

    //  Bhai return karna toh mat bhulo yaar!!!!!
    //  React router enabling
    return (
        <Routes>
            <Route path='/' element={<MainGallery />} />
            {/* We have id in our response.data -> check clg */}

            {/* Variable id */}
            <Route path='/images/:id' element={<Individual />} />

        </Routes>
    )
}
export default CustomRoutes;