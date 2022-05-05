import axios from "axios";

const UBICACION_BASE_REST_API_URL ='http://localhost:8080/api/v1/ubicacion'

class UbicacionService{

    getAllUbicacion(){
        return axios.get(UBICACION_BASE_REST_API_URL)
    }

    createUbicacion(ubicacion){
        return axios.post(UBICACION_BASE_REST_API_URL,ubicacion)
    }

    getUbicacionId(ubicacionId){
        return axios.get(UBICACION_BASE_REST_API_URL +'/' + ubicacionId)
        
    }
    updateUbicacion(ubicacionId,ubicacion){
        return axios.put(UBICACION_BASE_REST_API_URL +'/' + ubicacionId,ubicacion)
    }

    
    deleteUbicacion(ubicacionId){
    return axios.delete(UBICACION_BASE_REST_API_URL +'/' + ubicacionId)
    }

    searchByName(name){
        return axios.request(UBICACION_BASE_REST_API_URL +'/search/'+name)
    }
}



export default new UbicacionService();