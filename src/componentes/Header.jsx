import React from 'react'
import search from './search.png'


const Header = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src={search} alt="" width="50"/>
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buscar Colaborador</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Lista de colaboradores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Registro</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header