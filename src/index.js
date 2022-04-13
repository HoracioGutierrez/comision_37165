//1) Tener la variable react en scope
import React from "react"

//2) Tener la variable reactDOM en scope
//import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"

import App from "./App"

//import "./estilos.css"
import "./estilos.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"))

//3) Tener la variable App(la variable que contiene todo el codigo de la aplicacion) en scope
/* const App = () => {
  return "Hola Mundo"
} */

//4) Hacer render de la App en el DOM
//ReactDOM.render(<App/>, document.getElementById("root"))
root.render(<App/>)