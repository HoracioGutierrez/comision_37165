const Nav = (props) => {
  if(props.footer){
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
        <a href="#">{props.nombre}</a>
        <a href="#" className="nav__link">link 1</a>
        <a href="#" className="nav__link">link 2</a>
        <a href="#" className="nav__link">link 3</a>
      </nav>
    )
  }
}

export default Nav