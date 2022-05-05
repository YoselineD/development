package net.java.direccionesbackend;

import net.java.direccionesbackend.model.ubicacion;
import net.java.direccionesbackend.repository.ubicacionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DireccionesBackendApplication implements CommandLineRunner {

	public DireccionesBackendApplication(ubicacionRepository UbicacionRepository) {
		this.UbicacionRepository = UbicacionRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(DireccionesBackendApplication.class, args);
	}
	private final ubicacionRepository UbicacionRepository;
	@Override
	public void run(String... args) {
		/*ubicacion Ubicacion = new ubicacion();
		Ubicacion.setNombre_dep("SIAMP");
		Ubicacion.setDepartamento("Guatemala");
		Ubicacion.setMunicipio("Guatemala");
		Ubicacion.setDireccion("Gerona zona 1");
		Ubicacion.setDescripcion("A la par de la estacion de tren");
		Ubicacion.setTelefono("77777777");
		UbicacionRepository.save(Ubicacion);*/


	}
}
