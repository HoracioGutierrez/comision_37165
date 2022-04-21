import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__titlo">E-Commerce</h1>
      <span className="material-icons">
        shopping_cart
      </span>
      <Nav nombre="Pedro" apellido="Gomez" footer={false}/>
    </header>
  )
}

export default Header