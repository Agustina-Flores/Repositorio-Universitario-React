import React from "react";
import Alumno from "./Alumno.js";
import Alumnos from '../datos/alumnos.json'
import { useParams } from "react-router-dom";
 

 function GrillaAlumnos ()  {

    const url = window.location.href;
    const { clave } = useParams();
    

    const alumnos = Alumnos.map((alumno,i) => {
        let sumaPromedio =0;
        let index=0;
        alumno.notas.forEach((promedio) =>{
            sumaPromedio += parseInt(promedio);
            index++;
        })
        let promedio = sumaPromedio/index;
        if(url.includes("/buscar/"))

        {
            if(alumno.alumno === clave)

            {

                return(
                    <Alumno
                    key={alumno.legajo}
                    alumno ={alumno.alumno}
                    legajo = {alumno.legajo}
                    fechaNacimiento= {alumno.fechaNacimiento}
                    promedio = {promedio}
                    />
                ); 
            } 
            else if(alumno.legajo === Number(clave))

            {

                return(
                    <Alumno
                    key={alumno.legajo}
                    alumno ={alumno.alumno}
                    legajo = {alumno.legajo}
                    fechaNacimiento= {alumno.fechaNacimiento}
                    promedio = {promedio}
                    />
                ); 
            } 
        }
         
        else 
        {

            return(
                <Alumno
                key={alumno.legajo}
                alumno ={alumno.alumno}
                legajo = {alumno.legajo}
                fechaNacimiento= {alumno.fechaNacimiento}
                promedio = {promedio}
                />
            ); 
        }
         
    });
    return(
        <div className="row">{alumnos}</div>
    )
 
}
export default GrillaAlumnos;