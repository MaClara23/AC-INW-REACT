import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Endereco() {
  return (
    <>
    <h1> Entre em contato com nossa loja VinoDivino:</h1>
    <br/>
    <p>Coloque seus dados, envie e aguarde o retorno!</p>
    <br/>
     <FloatingLabel controlId="floatingPassword" label="Assunto">
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>
     <br/>
     <FloatingLabel controlId="floatingPassword" label="Telefone">
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>
     <br/>
     <FloatingLabel controlId="floatingPassword" label="Nome do cliente">
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>
    <br/>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <br/>
      <Button variant="primary">Enviar</Button>{' '}
      <br/>
<Container>
      <Col xs={6} md={4}>
          <Image src="https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" roundedCircle/>
        </Col>
        </Container>
        <p>
            
        </p>
    </>

  );

}




export default Endereco;