import { useNavigate } from "react-router-dom"

const Item = ({producto}) => {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/producto/${producto.id}`)
  }

  return (
    <article className="card">
      <h3>{producto.titulo}</h3>
      {/* <img src="https://via.placeholder.com/300x300" alt="card"/> */}
      <img src={producto.imagen}/>
      <p>Precio : ${producto.precio}</p>
      <p>Categorias : {producto.categoria}{/* producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
      }) */} </p>
      <button onClick={handleClick}>ver mas</button>
    </article>
  )
}
export default Item