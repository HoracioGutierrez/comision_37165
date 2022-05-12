import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productosIniciales from "./productos.json"
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

//db es referencia a toda la base de datos donde estan todas las colecciones
import { db } from "./firebase";

//collection es una funcion que nos da una referencia a una coleccion 
import { collection , getDoc , doc , getDocs , addDoc , query } from "firebase/firestore"



const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])
  const {nombreCategoria,test} = useParams()

  
  useEffect(()=>{

    //productosCollection es una referencia a la coleccion de productos donde estan todos los docuemntos
    const productosCollection = collection(db,"productos")
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado)=>{
        //console.log(resultado.docs)
        const productos = resultado.docs.map(doc=>{

          const productoConId = doc.data()
          productoConId.id = doc.id

          return productoConId
//          console.log(doc.id)
  //        return doc.data()
        })

        setProductos(productos)
        setCargando(false)

      })
      .catch((error)=>{

      })
      .finally(()=>{

      })

    //getDocs() : Trae un grupo de documentos, mas de uno seguro
    //getDocs(Collection) : Trae todo lo que esta en Collection
    //getDocs(query) : Trae algunos documentos dependiendo el query(filtro)


    /* if(nombreCategoria==undefined){
      //console.log("Pido todos los productos")
    }
      else{
        //console.log("Pido los productos de la categoria: ",nombreCategoria)
      }
    
    toast.info("Cargando productos...")

    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },500)
    })

    pedido
    .then(()=>{
      setCargando(false)
      setProductos(productosIniciales)
      toast.dismiss()
      toast.success("Productos cargados!")
    }) */

  },[nombreCategoria])

  return (
    <>
      {cargando ? <BeatLoader /> : <ItemList productos={productos} />}
    </>
  )
}

export default ItemListContainer