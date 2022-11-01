import React from "react";
import Articulos from '../data/articulos.json';

function Menu()
{

let clave =0;
let palabra ="";

clave = (e) =>{
  palabra = e.target.value;
}

let submitHandler = (e) =>{
  if(palabra === "")
  {
    window.location.href="/";
  }
  else{
    window.location.href = `/buscar/${palabra}`;
  }
};

let menorPromedio =9999999;
let masBarato ="";
const calcularPromedio = (articulo) => {

  let suma=0;
 
  articulo.preciosRelevados.forEach((precio)=>{
    
    suma = parseFloat(precio + suma); 
    let promedio = suma / articulo.preciosRelevados.length;
  
     if(menorPromedio >= promedio)
     {
      menorPromedio = promedio;
     
      masBarato = articulo;
     }     
  });
  
}
Articulos.forEach((art) =>{

  calcularPromedio(art);
});
const rutaMasBarato= `/detalle/${masBarato.codigo}`; 
 

  return(

    <div class="topnav">
    Codigo :  
      <input 
       className="form-control mr-sm-2"
      type="search" 
      placeholder="Buscar.." 
      aria-label="Search"
      name="codigo" 
      onChange={clave}
      />
      <button 
       className="btn btn-outline-success my-2 my-sm-0"
      type="button"
      onClick={submitHandler}
      >Buscar
      </button>
      Denominacion :  
      <input 
       className="form-control mr-sm-2"
      type="search" 
      placeholder="Buscar.." 
      aria-label="Search"
      name="denominacion" 
      onChange={clave}
      />
      <button 
       className="btn btn-outline-success my-2 my-sm-0"
      type="button"
       onClick={submitHandler}
      >Buscar
      </button>
      <a href={rutaMasBarato}>MAS BARATO</a>
     </div>
  ) 

}

export default Menu;