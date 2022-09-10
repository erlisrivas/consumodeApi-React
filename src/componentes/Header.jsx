import React from 'react'
import pokeapi from './pokeapi.png'


const Header = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src={pokeapi} alt="" width="100"/>
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buscar Pokemon</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Galería</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header