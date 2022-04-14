import Nav from "./Nav"

const Footer = () => {

  const edad = 30
  const saludo = () => { }
  const links = ["link1", "link2", "link2", "cantactame", "faq", "tienda"]
  //const footer = true

  return (
    <footer className="footer">
      <p>Copyright &copy; - 2022</p>
      <p>Todos los derechos reservados</p>
      <Nav
        nombre="horacio"
        apellido="Gutierrez" 
        edad={edad} 
        onAdd={saludo}
        link={links} 
        footer
        />
    </footer>
  )
}

export default Footer