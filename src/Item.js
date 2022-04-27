const Item = ({producto}) => {
  return (
    <article className="card">
      <h3>{producto.nombre}</h3>
      <img src="https://via.placeholder.com/300x300" alt="card"/>
      <p>Precio : ${producto.precio}</p>
      <p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
      })} </p>
      <button>Detalles</button>
    </article>
  )
}
export default Item