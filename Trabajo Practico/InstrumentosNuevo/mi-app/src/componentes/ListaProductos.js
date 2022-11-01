import React from "react";
import Instrumentos from "../datos/instrumentos.json";
import camion from '../imagenes/camion.png';
import '../hojas-de-estilo/ListaProducto.css';
import { Link } from "react-router-dom";

const ListaProductos = () =>

{
  
  const instrumentos = Instrumentos.map(instrumento =>{
    if(instrumento.costoEnvio === "G")
    {
      
     return(
      <div className="instrumentos"> 
      <div key={instrumento.id}>
         <img className="contenedor-imagen" 
          src={require(`../imagenes/${instrumento.imagen.toLowerCase()}`)}
          />
       
      </div>
       <div className="contenedor-texto">
       <p><h3>  <Link to ={`/productos/${instrumento.id}`}>{instrumento.instrumento}</Link></h3></p>
       <p><h4>${instrumento.precio}</h4></p>
       <p className="envio-gratis"><img src={camion}></img> Gratis a todo el Pais</p>
      <p className="cantidad-vendidos">{instrumento.cantidadVendida} vendidos</p>
       </div>
      </div>
  )}else
  {
    return(
      <div className="instrumentos">
      <div key={instrumento.id}>
         <img className="contenedor-imagen" 
          src={require(`../imagenes/${instrumento.imagen.toLowerCase()}`)}
          />
          
      </div>
       <div className="contenedor-texto">
        <p><h3><Link to ={`/productos/${instrumento.id}`}>{instrumento.instrumento}</Link></h3></p>
       <p><h4>${instrumento.precio}</h4></p>
       <p className="costo-envio"> Costo de Envio Interior de Argentina: 300$</p>
      <p className="cantidad-vendidos">{instrumento.cantidadVendida} vendidos</p>
       </div>
  
    </div>
    );
  } 

  });
  return (
    <>
     
      {instrumentos}
    </>
  );
}

export default ListaProductos;