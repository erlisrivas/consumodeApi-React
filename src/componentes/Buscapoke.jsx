import React from 'react'
import Card from './Card'
//import React, {useState} from 'react'
import pokelogo from './pokelogo.jpg'
//import MiApi from './MiApi'

const Buscapoke = ({results}) => {
  //const estado= MiApi(url)
  //const[busqueda, setBusqueda] = useState("");
  
  return (

    <div className="general">

    <div className="containerSld">
      <div className="logoBuscador">
      <img src={pokelogo} alt="" width="257" height="130"/>
      
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex justify-content-center">
                <input 
                className="form-control me-2" 
                type="search" placeholder="Buscar pokemon" />
                
                </form>
            </div>
        </nav>
        </div>
    </div>

    <div className="containerPoke">

            {
         results.map((el)=>(
              <div className="card-item" key={el.name}>
              <Card url={el.url}/>
              </div>
            ))
            }
      
        </div>
  </div>
  )
}

export default Buscapoke