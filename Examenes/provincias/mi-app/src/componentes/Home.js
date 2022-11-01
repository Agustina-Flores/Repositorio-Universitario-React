import React from "react";
import '../hojas-de-estilo/Home.css';
import Provincia from '../componentes/Provincia';
import Provincias from '../data/lista_provincias.json';
import { useParams } from "react-router-dom";

const Home = () =>
{

 
const url = window.location.href;
const { superficie } = useParams();
const provincias = Provincias.map((provincia,i) =>{
    if(url.includes("/provincia-puerto"))

    {
        if(provincia.tienePuerto === "Y")
        {
    
            return(
                <div className="col-3">
                <Provincia 
                key={provincia.abreviatura}
                abreviatura={provincia.abreviatura}
                provincia={provincia.provincia}
                imagen={provincia.bandera}
                capital = {provincia.capital}
                />
                </div>
            );
        }
        else
        {
            return null;
        }
    } else if (url.includes("/buscar/"))
    {
      
        if(parseInt(provincia.superficie) >= parseInt(superficie))
        {
            return(
                <div className="col-3">
                <Provincia 
                key={provincia.abreviatura}
                abreviatura={provincia.abreviatura}
                provincia={provincia.provincia}
                imagen={provincia.bandera}
                capital = {provincia.capital}
                />
                </div>
            ); 
        }
        else{
            return null;
        }
        
    }  else
    {
        return(
            <div className="col-3">
            <Provincia 
             key={provincia.abreviatura}
           abreviatura={provincia.abreviatura}
            provincia={provincia.provincia}
            imagen={provincia.bandera}
            capital = {provincia.capital}
            />
            </div>
        );
    }
     
});
  
        return(
            <div>
                <h3 className="titulo">Provincias de la Republica Argentinas</h3>
                <div className="row">
                {provincias}
                </div>
            </div>
        );
}

export default Home;