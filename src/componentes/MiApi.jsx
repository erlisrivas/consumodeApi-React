import React, {useState, useEffect} from 'react'
import busquedalogo from './busquedalogo.jpg'



const MiApi = () => {

  //setear los hooks useState
  const [users, setUsers] = useState ([])
  const [busqueda, setBusqueda] = useState ("")

  //funcion para traer los datos de la api
  const url = 'http://jsonplaceholder.typicode.com/users'

  const mostrarData = async () => {
    const response = await fetch(url)
    const data  = await response.json()
    console.log(data)
    setUsers(data)
  }

  //metodo de filtrado
    let resultado = []
    if(!busqueda){
      resultado = users
    } else{
      resultado = users.filter((dato) =>
      dato.name.toLowerCase().includes(busqueda.toLowerCase())
    )
    }
  useEffect(()=>{
    mostrarData ()},[])
  
  //funcion de busqueda
  const searcher = (e) =>{
    setBusqueda(e.target.value)
    console.log(e)
  }
  //renderizar la vista
  return (
    <div className="containergeneral">
      
      <div className="containerSld">
      <div className="logoBuscador">
      <img className="busq" src={busquedalogo} alt="" width="120" height="100"/>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex justify-content-center">
                <input 
                value ={busqueda}
                onChange = {searcher}
                className="form-control me-2" 
                type="search" placeholder="Buscar colaborador" />
                </form>
            </div>
        </nav>
        </div>
    </div>

    <div className ="tablas">
      <table className="table table-striped table-hover mt-5 shadow-lg">
      <thead>
        <tr className="bg-curso text-white">
          <th>Nombre</th>
          <th>Apodo</th>
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody>
        {
          resultado.map((user) =>(
            <tr key = {user.id}>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.address.street}</th>
            </tr>
          ))     
        }
      </tbody>
      </table> 
    </div>   
    <div>
    <section className="container my-5">
        <h2 className="display-4 fw-bold text-center text-primary my-4">Nuevo Colaborador</h2>
        <form>
            <div className="form-group mb-4">
                <label className="mb-2">Nombre</label>
                <input className="form-control" placeholder="Nombre"/>
            </div>
            <div className="form-group mb-4">
                <label className="mb-2">Apodo</label>
                <input className="form-control" placeholder="Apodo" />
            </div>
            <div className="form-group">
                <label className="mb-2">Dirección</label>
                <textarea className="form-control" placeholder="Dirección"></textarea>
            </div>
            <div className="my-3 text-end">
                <button className="btn btn-primary text-light">Enviar</button>
            </div>
        </form>
    </section>
    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    </div>
  )
}

export default MiApi