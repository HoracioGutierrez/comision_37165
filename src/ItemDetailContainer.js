import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})

  useEffect(()=>{
    //aca hago el pedido (la promesa con el timeout de 2 seg)
  })


  return (
    <p>Cargando...</p>
  )
}

export default ItemDetailContainer



//1) quiero mostrar la pagina lo antes posible y que el usuario sepa que tiene que esperar
//2) Quiero pedir el detalle del producto mientras el ususario espera
//3) Quiero avisar al usuario que termino el pedido y mostrar la info que consegui del producto