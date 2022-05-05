import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto


const MiCustomProvider = ({children}) => {

  const [carrito,setCarrito] = useState([])
  const [cantidad_total,setCantidad_total] = useState(0)
  const [precio_total,setPrecio_total] = useState(0)

 /* 
 
  COmo la propiedad y la variable se llaman iguales, se omiten los dos puntos

 const valorDelContexto = {
    cantidad_total : cantidad_total,
    precio_total : precio_total,
    carrito : carrito
  }

 */

  const agregarProducto = (producto,cantidad) => {
   /*  if(estaEnCarrito(producto)){

    }else{

      setCantidad_total(cantidad_total + cantidad)
    } */
  }

  const eliminarProducto = (id) => {
    
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const estaEnCarrito = (producto) => {
    //return true o false
  }

  const valorDelContexto = {
    cantidad_total ,
    precio_total ,
    carrito ,
    agregarProducto ,
    eliminarProducto , 
    vaciarCarrito ,
    estaEnCarrito
  }

  return (
    <Provider value={valorDelContexto} >
      {children}
    </Provider>
  )
}

export default MiCustomProvider