# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 component manangement
    Hame usse ache se rkhna , code clean up..
    Components:
1) Bhot saare call back karne pad rhe hai , issliye hame usse different function bana ke rkh do!!!
`
     Jaise jaise app badhte jayegi , yeh callback function increase hote jayegi
`


# Reducer
(Simple function joh 2 parameter leta hai (in form of objects dono)!!!)
1) State --> Joh bhi update karna hai .

2) Action --> yeh state pe ham ky operation karna chahte hai , simple object hote hai ..
Ispar ek method aata hai..
type property and payload property (iske andar aur custom objects rhenge)

Har states ke liye hame joh bhi karna hai , woh waha se trigger karenge
callback toh execute karna ho tab ham action ko execute kar denge (dispatch.)


# Redux (Predictable library)
State container for JS apps 
1) Centralized
2) Debuggable (Redux dev tool (analogue with gdb (time travelling))).
3) Flexible.

`Redux Toolkit`

# Redux Core 
Not a react project , it is basically npm project.
 Contains main function

` npm install redux`

Important Functions!!
Function In Redux: (Top - Level Exports )
1) Compose
2) Apply Middleware
3) Create store 
4) Combine Reducer
5) Bind Action Creator


1) Compose

