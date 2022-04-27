import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"

const Main = ({ nombre }) => {

  return (
    <main>
      <h1>Hola, bienvenido {nombre}</h1>
      <ItemListContainer />
      <ItemDetailContainer/>
    </main>
  )
}

export default Main