import { useContext } from "react"
import { contexto } from "./miContexto"

const Carrito = () => {

  const {precio_total , carrito , vaciarCarrito} = useContext(contexto)

  return (
    <div>
      <h1>Carrito</h1>
      <h2>Precio Total: ${precio_total}</h2>
    </div>
  )
}

export default Carrito