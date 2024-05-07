import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//  Importing the react router , yaha par hi hoga
// Custom hook provide by react router
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    //  Binding into our BrowserRouter custom hook
    // Enable react router into our whole react router 
    // Make routes folder outside the components
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
)
