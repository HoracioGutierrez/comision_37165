import {memo, useEffect} from "react"

const CarritoItem = ({usuario}) => {
  
  console.log("Render CarritoItem")

  return (
    <div>
      <h3>{usuario.nombre}</h3>
    </div>
  )
}
export default memo(CarritoItem)