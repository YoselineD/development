package net.java.direccionesbackend.repository;

import net.java.direccionesbackend.model.ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ubicacionRepository extends JpaRepository <ubicacion, Long>{
    @Query("SELECT u FROM ubicacion u WHERE u.Nombre_dep LIKE concat('%',?1,'%') and u.Activo = 1")
    List<ubicacion> findByName(String nombreDep);
}

