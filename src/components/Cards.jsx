import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {

  const dados = [
    {
      titulo:'Vodkas',
      texto:'Explore a pureza e versatilidade das vodkas, destiladas para a perfeição e reconhecidas por sua suavidade excepcional. Mergulhe em um mundo de infinitas possibilidades com cada gole dessa bebida icônica.',
     
      img:'https://images.pexels.com/photos/12099383/pexels-photo-12099383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Vinhos',
      texto:'Descubra o encanto e a sofisticação dos vinhos, onde cada taça conta uma história de sabor e tradição. Abrace uma jornada sensorial através das uvas mais finas e dos aromas cativantes deste elixir dos deuses.',
      img:'https://images.pexels.com/photos/15666774/pexels-photo-15666774/free-photo-of-alcool-bebida-alcoolica-garrafas-bebidas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Champanhes',
      texto:'Celebre momentos especiais com a efervescência e elegância dos champanhes, símbolo máximo de celebração e luxo. Deixe-se envolver com seu sabor inconfundível, brindando a cada gole a alegria da vida.',
      img:'https://images.pexels.com/photos/15006642/pexels-photo-15006642/free-photo-of-vinho-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, texto, img}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={img} width={30}height={500}/>
          <Card.Body>
            <Card.Title className='titc'>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
            <Button className='bott'>Visualizar</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>
  // return (
  //   <CardGroup>
  //     <Card>
  //       <Card.Img variant="top" src="https://images.pexels.com/photos/12099383/pexels-photo-12099383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  //       <Card.Body>
  //         <Card.Title>Vodkas</Card.Title>
  //         <Card.Text>
  //         Explore a pureza e versatilidade das vodkas, destiladas para a perfeição e reconhecidas por sua suavidade excepcional. De coquetéis clássicos a novas criações, mergulhe em um mundo de infinitas possibilidades com cada gole dessa bebida icônica.
  //         </Card.Text>
  //       </Card.Body>
  //     </Card>
  //     <Card>
  //       <Card.Img variant="top" src="https://images.pexels.com/photos/15666774/pexels-photo-15666774/free-photo-of-alcool-bebida-alcoolica-garrafas-bebidas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  //       <Card.Body>
  //         <Card.Title>Vinhos</Card.Title>
  //         <Card.Text>
  //         Descubra o encanto e a sofisticação dos vinhos, onde cada taça conta uma história de sabor e tradição. Abrace uma jornada sensorial através das uvas mais finas e dos aromas cativantes deste elixir dos deuses.{' '}
  //         </Card.Text>
  //       </Card.Body>
  //     </Card>
  //     <Card>
  //       <Card.Img variant="top" src="https://images.pexels.com/photos/15006642/pexels-photo-15006642/free-photo-of-vinho-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  //       <Card.Body>
  //         <Card.Title>Champanhes</Card.Title>
  //         <Card.Text>
  //         Celebre momentos especiais com a efervescência e elegância dos champanhes, símbolo máximo de celebração e luxo. Deixe-se envolver por suas borbulhas vibrantes e sabor inconfundível, brindando a cada gole a alegria da vida.
  //         </Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </CardGroup>
  );
}

export default Cards;