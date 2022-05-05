import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from "react-router-dom"
import MiCustomProvider from "./miContexto"

const App = () => {
  return (
    <BrowserRouter>
      <MiCustomProvider>
        <Header />
        <Main />
        <Footer />
      </MiCustomProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App