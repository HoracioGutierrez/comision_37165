import Container from "./Container"

const Main = ({ children, nombre }) => {

  //console.log(props)
  //const {children,nombre} = props
  //const {children:children} = props
  //const children = props.children

  return (
    <main>
      Main, bienvenido {nombre}
      {children}
      <span className="material-icons">
        shopping_cart
      </span>
      <Container />
    </main>
  )
}

export default Main