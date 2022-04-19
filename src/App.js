//import React from "react"
//Fragmento

//import React from "react"
//import {Fragment} from "react"

//<React.Fragment></React.Fragment>
//<Fragment></Fragment>

import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {
  return (
    <>
      <Header/>
      <Main nombre="Pedro"/>
      <Footer />
    </>
  )
}

export default App