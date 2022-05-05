import React, { useEffect, useState } from 'react'
import UbicacionService from '../services/UbicacionService'
import { Link } from 'react-router-dom';


const ListaComponentsDependencias = () => {
const [ubicacion, setubicacion] = useState([])
const [buscar, setbuscar] = useState('')

useEffect(() => {
  getAllUbicacion();
}, [])

const getAllUbicacion =()=>{
  UbicacionService.getAllUbicacion().then((Response)=>{

    setubicacion(Response.data)
    console.log(Response.data);
  }).catch(error =>
    console.log(error)
    );

}


 const searchByName =(buscar)=>{
   UbicacionService.searchByName(buscar).then((Response)=>{

    setubicacion(Response.data)

   }).catch(error=>{
    console.log(error);
  })
 }


const deleteUbicacion =(id_direccion)=>{
  UbicacionService.deleteUbicacion(id_direccion).then((response)=>{

  }).catch(error=>{
    console.log(error);
  })
}


  return (
    <>
    <div className='container'>
        <h2 className='text-center'>Ubicación de Dependencias</h2>


<div className="col-md-6 mb-4">

  <form className="form-inline md-form mr-auto">
    <input   type= "text"
                            placeholder='Buscar'
                            name='buscar'
                            value={buscar}
                            onChange={(e)=>setbuscar(e.target.value)}></input> <label>  </label>
    <button type="button" className="btn btn-primary " onClick = {() => searchByName(buscar)}>Buscar</button> <label>  </label>
    <button type="button" className="btn btn-primary " onClick = {() => getAllUbicacion()}>Limpiar</button>
  </form>
</div>

        <Link to = "/add-Ubicacion" className = "btn btn-primary mb-2" > Agregar Ubicación </Link>
        <table className='table table-bordered table-striped'>
            <thead>
              <tr>
            <th>Id</th>
            <th>Nombre Dependencia</th>
            <th>Departamento</th>
            <th>Municipio</th>
            <th>Dirección</th>
            <th>Descripción</th>
            <th>Telefono</th>
            </tr>
            </thead>
            <tbody>
                {ubicacion.map((ubicacion) =>
                    <tr key={ubicacion.id_direccion} >
                        <td>{ubicacion.id_direccion}</td>
                        <td>{ubicacion.nombre_dep}</td>
                        <td>{ubicacion.departamento}</td>
                        <td>{ubicacion.municipio}</td>
                        <td>{ubicacion.direccion}</td>
                        <td>{ubicacion.descripcion}</td>
                        <td>{ubicacion.telefono}</td>
                        <td>
                        <Link className="btn btn-info" to={`/edit-ubicacion/${ubicacion.id_direccion}`} >Editar</Link>
                        <button className = "btn btn-danger" onClick = {() => deleteUbicacion(ubicacion.id_direccion)}
                                    style = {{marginLeft:"10px"}}> Eliminar</button>
                        </td>
                    </tr>
                )}

            </tbody>
        </table>
    </div>
    </>
  )
}

export default ListaComponentsDependencias