import Container from "./Container"

const Main = ({ nombre }) => {

  return (
    <main>
      <h1>Hola, bienvenido {nombre}</h1>
      <span className="material-icons">
        shopping_cart
      </span>
      <Container />
    </main>
  )
}

export default Main