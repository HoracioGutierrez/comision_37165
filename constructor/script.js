/* 

function Producto () {

  this.precio = 100
  this.titulo = "Producto 1"

  return instancia
}


function Electronicos(){

  Productos

}

new Producto()

*/


class Producto {

  constructor(precio,titulo){
    this.precio = 100
    this.titulo = "Producto 1"
  }

}


class Electornicos extends Producto {

  constructor(){
    super()
    this.titulo = "Electornicos"
  }
  
}


class MiComponente extends React.Component {

  constructor(props){
    super(props)
  }

}