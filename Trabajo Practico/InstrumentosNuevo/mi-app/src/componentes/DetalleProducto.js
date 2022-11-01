 
import React from "react";
 import { useParams } from 'react-router-dom';
import instrumentos from "../datos/instrumentos.json";
 import '../hojas-de-estilo/DetalleProducto.css';
 import camion from '../imagenes/camion.png';

const DetalleProducto = () =>
{
    const { id } = useParams();

  
    const instrumentoEncontrado = instrumentos.find((instrumento) => instrumento.id === id)
  
    if(instrumentoEncontrado.costoEnvio === "G")
    {
   return(  
      <> 
    <div className="instrumentos">
     <div>
     <img className="contenedor-imagen" 
          src={require(`../imagenes/${instrumentoEncontrado.imagen.toLowerCase()}`)}
          />
        <p className="componente-descripcion">Descripcion: <br></br> <br></br>
          {instrumentoEncontrado.descripcion}</p>
     </div>  
     <div className="contenedor-texto">
     <h6>{instrumentoEncontrado.cantidadVendida}vendidos</h6> 
                <h4>{instrumentoEncontrado.instrumento}</h4><br></br>
                <h2>${instrumentoEncontrado.precio}</h2><br></br>
                <h3>Marca: {instrumentoEncontrado.marca}</h3>
                <h3>Modelo: {instrumentoEncontrado.modelo}</h3><br></br>
                <h5>Costo Envio: </h5>  
                <p className="envio-gratis"><img src={camion}></img>Envío gratis</p><br></br>
                <button className="boton"><b>Agregar al carrito</b></button>
     </div>
    </div>
    </>
   )
    }
    else{
        return(
            <> 
       <div className="instrumentos">
     <div>
     <img className="contenedor-imagen" 
          src={require(`../imagenes/${instrumentoEncontrado.imagen.toLowerCase()}`)}
          />
        <p className="componente-descripcion">Descripcion: <br></br> <br></br>
          {instrumentoEncontrado.descripcion}</p>
     </div>  
     <div className="contenedor-texto">
     <h6>{instrumentoEncontrado.cantidadVendida}vendidos</h6> 
                <h4>{instrumentoEncontrado.instrumento}</h4><br></br>
                <h2>${instrumentoEncontrado.precio}</h2><br></br>
                <h3>Marca: {instrumentoEncontrado.marca}</h3>
                <h3>Modelo: {instrumentoEncontrado.modelo}</h3><br></br>
                <h5>Costo Envio: </h5>  
                <p className="costo-envio">Costo de Envio Interior de Argentina 300$</p><br></br>
                <button className="boton"><b>Agregar al carrito</b></button>
     </div>
    </div>
    </> 
        )
    }
}


export default DetalleProducto
