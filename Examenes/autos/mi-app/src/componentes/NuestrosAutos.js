import React from "react";
import { useParams } from "react-router-dom";
import Autos from '../data/autos.json';
import Auto from "./Auto";

const NuestrosAutos = () =>
{
 
    const { id } = useParams();
    const url = window.location.href;

    const autos = Autos.map((auto,i) =>
    {
         const autoId =  auto.imagen.replace(".jpg", "");
         if(url.includes("/buscar/"))
         {
            if ((auto.marca === id)|| (auto.modelo === id) || (auto.localidad === id)|| (auto.anio === id)|| (auto.precio === id))
            {
                return(
                    <Auto   
                        key={autoId}              
                        imagen ={auto.imagen}
                        marca ={auto.marca}
                        modelo ={auto.modelo}
                        anio={auto.anio}
                        precio={auto.precio}
                    />
                );
            }
             
         }
         else{ 
  
            return(
                <Auto   
                    key={autoId}              
                    imagen ={auto.imagen}
                    marca ={auto.marca}
                    modelo ={auto.modelo}
                    anio={auto.anio}
                    precio={auto.precio}
                />
            );
      
         }
 
    });

    return (
        <div>
         <div className="row">{autos}</div>
        </div>
       );   
}

export default NuestrosAutos;