import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// .Like context api (fOR PASSING THE STORE)
import {Provider} from 'react-redux'
import store from './store.js'

// Making special parent
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
