import { useContext, useState } from 'react'
import Hijo from './Hijo';
import { contexto } from './miContexto';

const ItemDetail = () => {

  const [nombre, setNombre] = useState('');
  const { agregarProducto } = useContext(contexto)

  const handleClickDefault = (e) => {
    e.preventDefault()
    //console.log('click default');
  }

  const handleClick = (numeroDelContadorDelHijo) => {
    //e.preventDefault()
    //e.stopPropagation()
    //console.log(e.target)
    console.log("Click del padre")
  }

  const handleChange = (e) => {
    //console.log(e.target.name)
    if (e.target.value !== "") {
      setNombre(e.target.value)
    }
  }

  const handleFocus = () => {
    //console.log("Focus")
  }

  const handleBlur = () => {
    //console.log("Blur")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit")
    console.log(nombre)
  }

  const handleAddCarrito = () => {
    agregarProducto({
      id: 1,
      nombre : "Producto 1",
      precio : 100,
      cantidad : 1
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <button onClick={()=>handleClick("Click")}>click</button> */}
        <a href="http://google.com" onClick={handleClickDefault}>ir a Google!</a>
        <input type="text" name="username" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        <button onClick={handleClick}>click</button>
        <Hijo onClick={handleClick} />
      </form>


      <h1>Detalle del producto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque euismod, urna eu tincidunt consectetur,
        nisi nisl tincidunt nisi, eget porttitor nisl nisi eu
        urna.
      </p>
      <img src="https://via.placeholder.com/300" alt="" />
      <p>Precio : $100</p>

      <button onClick={handleAddCarrito}>terminar mi compra</button>
    </div>
  )
}

export default ItemDetail