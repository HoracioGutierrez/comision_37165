import { useState , useEffect } from "react"



const Presentacional = (props) => {
  
  const [contador, setContador] = useState(0)
  const [dark, setDark] = useState(false)
  //useEffect(()=>{},[])
  useEffect(()=>{
    console.log("Nuevo render")
    console.log("Hago un pedido a una BD para productos")
  },[])
  

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const toggleDark = () => {
    setDark(!dark)
  }

  console.log(dark)
  
  return (
    <div>
      <p>Contador Actual : {contador}</p>
      <p>Modo dark : {"dark"}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={toggleDark}>toggle dark</button>
    </div>
  )
}
export default Presentacional