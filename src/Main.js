import Container from "./Container"

const Main = ({ nombre }) => {

  return (
    <main>
      <h1>Hola, bienvenido {nombre}</h1>
      <Container />
    </main>
  )
}

export default Main