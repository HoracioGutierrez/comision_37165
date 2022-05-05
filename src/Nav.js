import {Link , NavLink} from 'react-router-dom'
import CartWidget from './CartWidget'

const Nav = ({footer,nombre}) => {
  if(footer){
    return (
      <nav className="nav">
        <CartWidget/>
        <Link to="/productos/electronicos" className="nav__link">electronicos</Link>
        <Link to="/productos/alimentos" className="nav__link">alimentos</Link>
        <Link to="/productos/ropa" className="nav__link">ropa</Link>
      </nav>
    )
  }else{
    return(
      <nav className="nav">
        <Link to="#">{nombre}</Link>
        <CartWidget/>
        <NavLink to="/productos/electronicos" className="nav__link">electronicos</NavLink>
        <NavLink to="/productos/alimentos" className="nav__link">alimentos</NavLink>
        <NavLink to="/productos/ropa" className="nav__link">ropa</NavLink>
      </nav>
    )
  }
}

export default Nav