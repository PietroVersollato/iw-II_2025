import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';
import Imagem from './components/Imagem';

function App() {
  return (
    <div className="App">
    <Header/>
    <Imagem/>
    <Cartao nome="Victor" nomecompleto="Victor Gabriel Bessemer Santos"/>
    <Footer/>



    </div>
  );
}

export default App;