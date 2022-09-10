import './App.css';
import React, {useState} from 'react'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Buscapoke from './componentes/Buscapoke';

import MiApi from './componentes/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //const [buscador, setBuscador] = useState ("")
  const [url, setUrl] = useState (" https://pokeapi.co/api/v2/pokemon")
  const estado = MiApi (url)
  const{cargando, data} = estado
  cargando?  console.log('cargando'): console.log(data.results)

  return (
    <div className="App">
      <Header/>
      {
        cargando?
        <h1>cargando...</h1>:
        <Buscapoke results={data.results}/>
        
      }
       <Footer/>
    </div>
  );
}

export default App;
