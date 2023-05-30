import CarrosselComponente from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards'
import Footer from '../components/Footer';

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <CarrosselComponente/>
          <Cards/>
          <br/>
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home