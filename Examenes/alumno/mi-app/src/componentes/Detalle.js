import React from 'react';
import Alumnos from '../datos/alumnos.json';
import { useParams } from "react-router-dom";

const Detalle = () =>
{

        const { legajo } = useParams();

        
      
        const alumnoEncontrado = Alumnos.find((alumno) =>  alumno.legajo == legajo)

        //lista de notas
        const listaNotas = alumnoEncontrado.notas.map((nota, i) => {
            return <li>{nota}</li>;
          });
         
          //promedio
          //vemos la notas del alumnoEncontrado guardamos la suma de todas
          let suma=0;
          alumnoEncontrado.notas.forEach((nota) =>{
            suma += parseInt(nota);
          })
         
          //sacamos la suma mas la cantidad de notas
          let promedio = suma/alumnoEncontrado.notas.length;
          
          
          //if si el estadoActivo es true el nombre se muestra en verde
          //o el nombre se muestra en rojo
          const nombre = alumnoEncontrado.estaActivo ? (
            <h3 style={{color:'green'}}> {alumnoEncontrado.alumno}</h3>
            ) : (
                <h3 style={{color:'red'}}> {alumnoEncontrado.alumno}</h3>
              );

            //si el alumnoencontrado es activo poner Si de lo contrario No
         const estado = alumnoEncontrado.estaActivo ? "SI" : "NO";

        return(
            
            <div className="container" >           
                <>
                <div className="row">
                    <table bordered style={{ width: '25rem' }}  >
                    <tr>
                        <td> 
                            <img className="contenedor-imagen" alt="..."
                            src={require(`../imagenes/${alumnoEncontrado.foto.toLowerCase()}`)}
                            /><br></br>
                        </td>
                        <td >
                            {nombre}
                        </td>
                    </tr>
                    <tr>
                        <td>Legajo : </td>
                        <td>{alumnoEncontrado.legajo}</td>
                    </tr>
                    <tr>
                        <td>Carrera : </td>
                        <td>{alumnoEncontrado.carrera}</td>
                    </tr>
                    <tr>
                        <td>Esta Activo : </td>
                        <td>{estado}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Nacimiento : </td>
                        <td>{alumnoEncontrado.fechaNacimiento}</td>
                    </tr>
                    <tr>
                        <td>Notas : </td>
                        <td>{listaNotas}</td>
                    </tr>
                    <tr>
                        <td>Promedio : </td>
                        <td>{promedio}</td>
                    </tr>
                    </table>
                </div>
                </>
            </div>
            
        );

        
}
export default Detalle;