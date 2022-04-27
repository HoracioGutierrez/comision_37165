const Nav = ({footer,nombre}) => {
  if(footer){
    return (
      <nav className="nav">
        <a href="#" className="nav__link">link 1</a>
        <a href="#" className="nav__link">link 2</a>
        <a href="#" className="nav__link">link 3</a>
      </nav>
    )
  }else{
    return(
      <nav className="nav">
        <a href="#">{nombre}</a>
        <a href="#" className="nav__link">link 1</a>
        <a href="#" className="nav__link">link 2</a>
        <a href="#" className="nav__link">link 3</a>
      </nav>
    )
  }
}

export default Nav