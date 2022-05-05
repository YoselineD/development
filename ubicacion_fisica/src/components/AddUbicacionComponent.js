import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory, useParams} from 'react-router-dom'
import UbicacionService from '../services/UbicacionService'

const AddUbicacionComponent = () => {
    const [nombre_dep, setnombre_dep] = useState('')
    const [departamento, setdepartamento] = useState('')
    const [municipio, setmunicipio] = useState('')
    const [telefono, settelefono] = useState('')
    const [direccion, setdireccion] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const history =useHistory();
    const {id} =useParams();

    const saveorUpdateUbicacion =(e)=>{
        e.preventDefault();

        const Ubicacion ={nombre_dep,departamento,municipio,direccion,telefono,descripcion}

        if(id){
            UbicacionService.updateUbicacion(id,Ubicacion).then((response)=>{
                history.push('/Buzon')
            }).catch(error =>{
                console.log(error);
            })

        }else{
        UbicacionService.createUbicacion(Ubicacion).then((response)=>{
            console.log(response.data)
            history.push('/Buzon');

        }).catch(error => {
            console.log(error)
        })
    }
    }

useEffect(() => {
    UbicacionService.getUbicacionId(id).then((response)=>{

        setnombre_dep(response.data.nombre_dep)
        setdepartamento(response.data.departamento)
        setmunicipio(response.data.municipio)
        setdireccion(response.data.direccion)
        settelefono(response.data.telefono)
        setdescripcion(response.data.descripcion)
        

    }).catch(error=>{
        console.log(error)
    })

}, [])

const title =()=>{
    if(id){
        return <h2 className ="text-center">Editar Ubicación</h2>
    } else {
        return <h2 className ="text-center">Agregar Ubicación</h2>

    }
}

    return (
    < >
        <br></br>
        <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                {title()}
                
                <div className='card-body'>
                
                    <form>
                        <div className='form-group md-2'>
                            <label className='form-label' > Dependencia</label>
                            <input
                            required ="required" 
                            type= "text"
                            placeholder='Nombre Dependencia'
                            name='nombre_dep'
                            className='form-control'
                            value={nombre_dep}
                            onChange={(e)=>setnombre_dep(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group md-2'>
                            <label className='form-label' > Departamento</label>
                            <input
                            required ="true" 
                            type= "text"
                            placeholder='Nombre Departamento'
                            name='departamento'
                            className='form-control'
                            value={departamento}
                            onChange={(e)=>setdepartamento(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group md-2'>
                            <label className='form-label' > Municipio</label>
                            <input 
                            required ="true"
                            type= "text"
                            placeholder='Nombre Municipio'
                            name='municipio'
                            className='form-control'
                            value={municipio}
                            onChange={(e)=>setmunicipio(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group md-2'>
                            <label className='form-label' > Direccion</label>
                            <input 
                            required ="true"
                            type= "text"
                            placeholder='Nombre Direccion'
                            name='direccion'
                            className='form-control'
                            value={direccion}
                            onChange={(e)=>setdireccion(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group md-2'>
                            <label className='form-label' > telefono</label>
                            <input 
                           required ="true"
                           type= "text"
                            placeholder='Nombre telefono'
                            name='telefono'
                            className='form-control'
                            value={telefono}
                            onChange={(e)=>settelefono(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group md-2'>
                            <label className='form-label' > Descripcion</label>
                            <input 
                            required ="true"
                            type= "text"
                            placeholder='Nombre Descripcion'
                            name='descripcion'
                            className='form-control'
                            value={descripcion}
                            onChange={(e)=>setdescripcion(e.target.value)}>
                            </input>
                        </div>
                        <br></br>
                        <button className = "btn btn-success" onClick = {(e) => saveorUpdateUbicacion(e)} >Agregar </button>
                        <NavLink to ='/Buzon' className='btn btn-danger'> Cancelar</NavLink>
                    </form>

                </div>

            </div>

        </div>
        </div>
    </>
  )
}

export default AddUbicacionComponent