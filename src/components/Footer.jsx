import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">VinoDivino</Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}

export default Footer;