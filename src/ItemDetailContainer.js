import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import productosIniciales from "./productos.json"
import { db } from "./firebase"
import { getDoc , doc , collection  } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{


    const productoCollection = collection(db,"productos")
    const resultadoDelDoc = doc(productoCollection,id)
    //console.log(resultadoDelDoc)
    const consulta = getDoc(resultadoDelDoc)
    
    consulta
      .then((resultado)=>{
        //console.log(resultado.id)
        //console.log(resultado.data())
        setProducto(resultado.data())
        setCargando(false)
      })
      .catch((error)=>{
        console.log(error)
        setCargando(false)
      })
    //console.log("Pido el producto con id: ",id)
    //console.log("Tengo los productos iniciales: ",productosIniciales)
    /* const resultado = productosIniciales.filter((producto)=>{
      return producto.id == id
    })[0]
    setProducto(resultado)
    setCargando(false) */
    //aca hago el pedido (la promesa con el timeout de 2 seg)
  })

  if(cargando){
    return (
      <p>Cargando...</p>
    )
  }else{
    return (
      <>
        <ItemDetail producto={producto}/>
      </>
    )
  }
}

export default ItemDetailContainer



//1) quiero mostrar la pagina lo antes posible y que el usuario sepa que tiene que esperar
//2) Quiero pedir el detalle del producto mientras el ususario espera
//3) Quiero avisar al usuario que termino el pedido y mostrar la info que consegui del producto