import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__titlo">E-Commerce</h1>
      </Link>
      <Nav nombre="Pedro" apellido="Gomez" footer={false}/>
    </header>
  )
}

export default Header