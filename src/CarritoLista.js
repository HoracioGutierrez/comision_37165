import {memo} from "react"
import CarritoItem from "./CarritoItem"

const CarritoLista = ({usuarios}) => {

  console.log("Render CarritoLista")

  return (
    <ul>
      {usuarios.map(usuario=>{
        return <CarritoItem key={usuario.id} usuario={usuario}/>
      })}
    </ul>
  )
}

export default /* memo( */CarritoLista/* ) */