import React from 'react';
import Alumnos from '../datos/alumnos.json';
function Menu ()

{ 

let nuevoPromedio=0;
let mejorAlumno = "";
 
const calcularPromedio = (alumno) => {
  let sumaPromedio = 0;
 
  alumno.notas.forEach((nota) => {
    
    sumaPromedio  =  parseFloat(sumaPromedio + nota) ;
    
   let promedio =   sumaPromedio / alumno.notas.length ;
   
    
   if(promedio > nuevoPromedio)
   {
    nuevoPromedio = promedio;
    
   mejorAlumno = alumno;
   }
  });
 
  return nuevoPromedio;
};
Alumnos.forEach((alu) => {
  calcularPromedio(alu);
   
});
//console.log(menorPromedio);
const rutaMejor = `/detalle/${mejorAlumno.legajo}`;
//console.log(rutaMejor);


  let clave= "";
  let palabra = "";
  clave = (e) =>
  {
    palabra = e.target.value;
  };

   
  let submitHandler = (e) => {
    if (palabra === "") {
      window.location.href = "/";
    } else {
      window.location.href = `/buscar/${palabra}`;
    }
  }; 
   
        return(
            <div class="topnav">
          Legajo :  
            <input 
             className="form-control mr-sm-2"
            type="search" 
            placeholder="Buscar.." 
            aria-label="Search"
            name="legajo" 
           onChange={clave}
            />
            <button 
             className="btn btn-outline-success my-2 my-sm-0"
            type="button"
           onClick={submitHandler}
            >Buscar
            </button>
            Nombre :  
            <input 
             className="form-control mr-sm-2"
            type="search" 
            placeholder="Buscar.." 
            aria-label="Search"
            name="alumno" 
           onChange={clave}
            />
            <button 
             className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={submitHandler}
            >Buscar
            </button>
            <a href={rutaMejor}>MEJOR ALUMNO</a>
           </div>
        );
     
}

export default Menu;