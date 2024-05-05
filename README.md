# React-All-Projects

# Uses Of React:
Refresh Feature (Load Single Page Application!! User by dynamically writing)
Navbar as it is hai !!(E.g. BookMyShow)
Angular --> Google , React --> Facebook ,
Vue , etc.

(Reusable Componentes !!!) -> Underline principle

Documentation - `
 https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
`

Basic Html --> cdn --> React object ka access mil jayega !!!
Page be joh bhi hoga woh javascript se hoga.
'React Elements'

React elements --> Json Object
`
    {
        type: 'button',
        props:{
            children:'Submit,
            className: 'btn btn-prty'
        }
    }
`
Creating the react element
`
    React.createElement('button' , {id: 'btn'}, React.createElement("Span" , {} , "Submit"))

            Conversion

    <button id = "btn">
        <span> Submit </span>
    </button>
`
Render on the root Element
Abb aa jayega!!
btn() --> Hamne joh likhe the usse function main wrap karke likh denge!!
`
    const rootContainer = document.gEBID('root');
    const root = ReactDOM.createRoot(rootContainer)

    root.render(btn());

`

# JSX (HTML Like Syntax)
Then give the neccessary options.(Interactive Prompt Provide.(using up and down arroy keys!))
`npm create vite@latest`

Another Method:
`npx create-react-app first-app`


Jaha par root hoga wohi jaake sab dom wale implement ho jayenge !!!

# JSX
React ke pass transpiler hota hai joh react element to original vale mai convert kar dega !! (Babble)

Function name App , Always starts with capital.
Reusable UI components!!
1) Classed Based.
2) Function Based.

`
    Html Type 
    function App(){
        return(
            div.classname > button
        );
    }
`

Calling:
`
    </ App>
`


# Components Basics
Basic HTML project : Navbar multiple page mai multiple time same code ( Redundancy !!) (DRY Principle hame rkhna chahiye)
React --> Html + css + JS ( Component (Set Of HTML tags) ) --> Reusable UI elements.

Methods For making Components!
1) Javascript Classes / Functions

Component --> Internally functions
Name should always start with capital.

Example:
It Return only one parent element
if there is no parent element than we can use <> </>
`touch Dogcard.js`
`
    function Dogcard(){
        return (
            <>
                <hello>
                <hi>
                <hey>
            </>
        )
    }

    export default Dogcard;

`

`import Dogcard from './Dogcard.js`

make functions so that we can make consistency in our code !!


# Import and Export
Moduling Concept:
Reusable module mai divide kar sakte ho apne code ko , taaki ham dusre code mai isse use kar sake

Export

Jaha par yaha use karna hai waha import karna hai !

Common JS moduling 
    `Const express = require('express)`
Es moduling
    `import arbaz from '../'`

Default --> Use for exposing single entity
For multiple: (Named Export)
export function a
export function b

for importing we have to destructure them !! (Name same hi dena padega warna error de dega)

import Dogcard , {Image , Bruno}
Default wala bahar !!!
Syntax:
export function Image(){
    return ();
}



# Important Points:
1) Capital 
2) Single Wrapper
3) Hame Extra wala div nhi chahiye then (<> , </>) (Fragment) , DOM pe koi extra elements nhi aayenge


Component <--- Input from parents (Props) Passed with the help of attributes 

Props --> Objects
"Joh bhi javascript ka valid expression hai aur usse evaluate karne ke baad output aaye tab hame curlies lagani hoti hai !!!"

camelCase Syntax. className
(Learn using the Documentation)


/// Jsx curlies OP!!
<Image src="./">

`
    function A(props){
        return (
            <>
                <img src={props.src}>
            </>
        )
    }
`

/// (.) OPERATOR , used with the props!!!



# Jsx Curlies

/// Giving the default value.
We can destucture the props {src = 100 , name }


Children props:(Important !!)
We can pass the whole jsx as a param
`
    <Name> <h1> Hello Arbaz </h1> </Name>
`

For Retrieving:
`
    function Name({children}){
        return <> {children} </>
    }
`


We can print or do anything with a valid javascript expression we can implement it using the jsx curlies

Jsx Syntax:
1st wala object ke liye and then jsx curlies wala curly!!
`
    <h2 style={{fontSize:10px}}>
`