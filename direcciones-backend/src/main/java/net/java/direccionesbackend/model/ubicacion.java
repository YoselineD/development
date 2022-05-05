package net.java.direccionesbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "direccion")

public class ubicacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_direccion;

    @Column(name = "Nombre_dep")
    private String Nombre_dep;

    @Column(name = "Departamento")
    private String Departamento;

    @Column(name ="Municipio")
    private String Municipio;

    @Column(name = "Telefono")
    private String telefono;

    @Column(name = "Direccion")
    private String Direccion;

    @Column(name = "Descripcion")
    private String Descripcion;

    @Column(name = "Activo")
    private Integer Activo;
}
