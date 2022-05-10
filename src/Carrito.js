import { useCallback, useContext, useState } from "react"
import CarritoLista from "./CarritoLista"
import { contexto } from "./miContexto"


/**
 * 
 * useEffect(()=>{},[])
 * 
 * useMemo (Hook) - useMemo(()=>? ,[])
 * useCallback (Hook) - useCallback(? , [])
 * 
 * 
 * memo (HoC)
 * 
 */


const Carrito = () => {

  const { precio_total, carrito, vaciarCarrito } = useContext(contexto)
  const [usuarios, setUsuarios] = useState([])
  const [nombre , setNombre] = useState("")

  //const counter = 0

  const handleClick = () => {

    //const copia = usuarios
    //const copia = usuario.splice(0)
    //const copia = usuarios.slice(0)

    //SPREAD / REST (...)
    /* const copia = [...usuarios]

    const usuario = {
      id : Math.random(),
      nombre : nombre
    }

    //usuarios.push(usuario)
    copia.push(usuario)

    setUsuarios(copia) */

    setUsuarios([...usuarios,{
      id : Math.random(),
      nombre : nombre
    }])

  }

  const handleChange = (e) => {
    setNombre(e.target.value)
  }

  const borrarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario=>usuario.id!=id))
  }

  const borrarUsuarioMemorizada = useCallback(borrarUsuario,[])

  console.log("Nuevo Render Carrito")

  return (
    <div>
      <h1>Carrito</h1>
      <h2>Precio Total: ${precio_total}</h2>
      <button onClick={handleClick}>click</button>
      <input type="text" onChange={handleChange}/>
      <CarritoLista usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
    </div>
  )
}

export default Carrito