import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Nav = ({ footer, nombre }) => {
  return (
    <nav className="nav">
      {!footer && <Link to="#">{nombre}</Link>}
      <CartWidget />
      <Link to="/productos/electronicos" className="nav__link">electronicos</Link>
      <Link to="/productos/alimentos" className="nav__link">alimentos</Link>
      <Link to="/productos/ropa" className="nav__link">ropa</Link>
    </nav>
  )
}

export default Nav