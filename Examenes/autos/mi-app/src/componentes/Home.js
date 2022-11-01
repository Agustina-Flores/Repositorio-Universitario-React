import React from "react";
import '../hojas-de-estilo/Home.css';
import Autos from '../data/autos.json';
import Auto from '../componentes/Auto';
const Home = () =>
{
 
    const autos = Autos.map((auto,i) =>{
        if(auto.destacado === "Y")
        {
            const autoId =  auto.imagen.replace(".jpg", "");
            return(
                <Auto 
                    key={autoId}
                    imagen = {auto.imagen}
                    marca = {auto.marca}
                    modelo = {auto.modelo}
                    anio={auto.anio}
                    precio = {auto.precio}
                />
            );
        }else {
            return null;
          }
    });
        return (
            <div>
              <div className="container-fluid">
          <div className="titulo">A TODO MOTOR AUTOS</div>
          <p className="descripcion">
            Publicá sin registrarte y en un sólo paso. ¿Apurado por vender?
            Recibí ofertas en Efectivo de concesionarios registrados. ¡Súper!
          </p>
          <div className="destacados">Destacados</div>

          <div className="row">
              {autos}
          </div>
        </div>
            </div>
        );
    

}
export default Home;