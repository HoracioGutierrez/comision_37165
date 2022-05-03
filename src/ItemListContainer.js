import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productosIniciales from "./productos.json"
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])
  const {nombreCategoria,test} = useParams()

  console.log({nombreCategoria,test})
  //console.log(nombreCategoria)
  //productos.filter()
  useEffect(()=>{

    if(nombreCategoria==undefined){
      console.log("Pido todos los productos")
    }
      else{
        console.log("Pido los productos de la categoria: ",nombreCategoria)
      }
    
    toast.info("Cargando productos...")

    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },500)
    })

    pedido
    .then(()=>{
      //console.log("Termino el pedido bien!")
      setCargando(false)
      setProductos(productosIniciales)
      toast.dismiss()
      toast.success("Productos cargados!")
    })

  },[nombreCategoria])

  if(cargando){
    return(
      <BeatLoader/>
    )
  }else{
    return (
      <ItemList productos={productos}/>
    )
  }
}

export default ItemListContainer