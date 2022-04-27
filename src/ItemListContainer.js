import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productosIniciales from "./productos.json"
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";

const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])

  useEffect(()=>{
    
    toast.info("Cargando productos...")

    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },5000)
    })

    pedido
    .then(()=>{
      console.log("Termino el pedido bien!")
      setCargando(false)
      setProductos(productosIniciales)
      toast.dismiss()
      toast.success("Productos cargados!")
    })

  },[])

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