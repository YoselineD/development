package net.java.direccionesbackend.controller;


import net.java.direccionesbackend.exception.ResourceNotFoundException;
import net.java.direccionesbackend.model.ubicacion;
import net.java.direccionesbackend.repository.ubicacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/ubicacion")
public class ubicacionController {

    @Autowired
    private ubicacionRepository UbicacionRepository;

    @GetMapping
    public List<ubicacion> getAllubicacion(){
       //return UbicacionRepository.findAll();
        List<ubicacion> todas = UbicacionRepository.findAll();
        List<ubicacion> activas = new ArrayList<>();
        for (int i = 0; i< todas.size();i++){
            if(todas.get(i).getActivo()==1){
                activas.add(todas.get(i));
            }
        }
        return activas;
    }

    //realizar busqueda por nombre dependencia

    @RequestMapping(path="/search/{nombre}")
    public List<ubicacion> getUbicacionLike(@PathVariable String nombre){
        List<ubicacion> todas = UbicacionRepository.findByName(nombre);
        return todas;
    }
//crear api rest de ubicacion
    @PostMapping
    public ubicacion createUbicacion(@RequestBody ubicacion Ubicacion){
        Ubicacion.setActivo(1);
        return UbicacionRepository.save(Ubicacion);
    }
    // obtener ubicacion por Id api rest

    @GetMapping("{id}")
    public ResponseEntity<ubicacion> getUbicacionById(@PathVariable long id){
    ubicacion Ubicacion =UbicacionRepository.findById(id)
            .orElseThrow(()-> new ResourceNotFoundException("No existe la dependencia con el id:"+ id));

    return ResponseEntity.ok(Ubicacion);
    }
//update ubicacion API REST
   @PutMapping("{id}")
    public ResponseEntity<ubicacion> updateUbicacion(@PathVariable long id,@RequestBody ubicacion ubicacionDetails ){
        ubicacion updateUbicacion = UbicacionRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("No existe la dependencia con el id:"+ id));
        updateUbicacion.setNombre_dep(ubicacionDetails.getNombre_dep());
        updateUbicacion.setDepartamento(ubicacionDetails.getDepartamento());
        updateUbicacion.setMunicipio(ubicacionDetails.getMunicipio());
        updateUbicacion.setDireccion(ubicacionDetails.getDireccion());
        updateUbicacion.setTelefono(ubicacionDetails.getTelefono());
        updateUbicacion.setDescripcion(ubicacionDetails.getDescripcion());

        UbicacionRepository.save(updateUbicacion);

        return ResponseEntity.ok(updateUbicacion);

    }

    //eliminar logicamente la  ubicacion API REST
    @DeleteMapping("{id}")
    public ResponseEntity<ubicacion> deleteUbicacion(@PathVariable long id ){
        ubicacion deleteUbicacion = UbicacionRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("No existe la dependencia con el id:"+ id));
        deleteUbicacion.setActivo(0);


        UbicacionRepository.save(deleteUbicacion);

        return ResponseEntity.ok(deleteUbicacion);

    }
}
