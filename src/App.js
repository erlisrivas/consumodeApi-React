import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import MiApi from './componentes/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div className="App">
      <Header/>
    
        <MiApi/>
      
       <Footer/>
    </div>
  );
}

export default App;
