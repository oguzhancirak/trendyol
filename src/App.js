import 'bootstrap/dist/css/bootstrap.min.css';
import Coursal from './components/Coursal';
import Header from './components/Header';
import Menu from './components/Menu';
import CartSection from './components/CartSection';
import OneCikanlar from './components/OneCikanlar';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      
      <Header></Header>
      <Menu></Menu>
      <hr className='mt-2'/>
      <Coursal></Coursal>
      <CartSection></CartSection>
      <OneCikanlar></OneCikanlar>
      <CartSection></CartSection>
      <OneCikanlar></OneCikanlar>
      <OneCikanlar ></OneCikanlar>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
