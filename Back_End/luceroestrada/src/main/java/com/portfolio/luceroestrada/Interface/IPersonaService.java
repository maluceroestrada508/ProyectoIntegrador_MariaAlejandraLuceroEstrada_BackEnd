
package com.portfolio.luceroestrada.Interface;

import com.portfolio.luceroestrada.Entity.Persona;
import java.util.List;


public interface IPersonaService {
//Traer una lista de personas
public List<Persona> getPersona();

//Guardar un objeto de tipo Persona
public void savePersona(Persona persona);

//Eliminar un objeto pero lo buscamos por id
public void deletePersona(Long id);

//Buscar una persona por id
public Persona findPersona(Long id);
}
