import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavComponente() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VinoDivino</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavComponente;