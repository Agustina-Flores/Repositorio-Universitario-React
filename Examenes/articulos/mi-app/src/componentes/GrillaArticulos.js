import React from "react";
import { useParams } from "react-router-dom";
import Articulos from '../data/articulos.json'
import Articulo from "./Articulo";

function GrillaArticulos ()
{

    const url = window.location.href;
    const { clave } = useParams();

    const articulos = Articulos.map((articulo) =>{

         let suma=0;
         let index=0;

         articulo.preciosRelevados.forEach((precio) =>{
            suma += parseFloat(precio);
            index++;

         });

         let promedio = suma / index;

         if(url.includes("/buscar/"))
         {

            if(articulo.codigo == clave)

            {

                return(
                    <Articulo
                    key={articulo.codigo}
                    articulo ={articulo.articulo}
                    codigo ={articulo.codigo}
                    fechaVencimiento = {articulo.fechaVencimiento}
                    promedio={promedio}
                    />
               );
            }
            else if(articulo.articulo === clave)
            {
                return(
                    <Articulo
                    key={articulo.codigo}
                    articulo ={articulo.articulo}
                    codigo ={articulo.codigo}
                    fechaVencimiento = {articulo.fechaVencimiento}
                    promedio={promedio}
                    />
               );

            }
         }
         else
         {
            return(
                <Articulo
                key={articulo.codigo}
                articulo ={articulo.articulo}
                codigo ={articulo.codigo}
                fechaVencimiento = {articulo.fechaVencimiento}
                promedio={promedio}
                />
           );
         }
       
    });

    return(
        <div className="row">{articulos}</div>
    )
   
}

export default GrillaArticulos;