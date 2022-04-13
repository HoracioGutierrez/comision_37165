import {Container , Button} from "react-bootstrap"

/* const Main = () => {
  return (
    <main className="container-fluid">Main</main>
  )
} */


const Main = () => {
  return (
    <Container as="main" fluid>
      Main
      <Button>click</Button>
    </Container>
  )
}

export default Main