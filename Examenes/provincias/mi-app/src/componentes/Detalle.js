import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Provincia from '../data/lista_provincias.json';
const Detalle = () =>{

    const navigate = useNavigate();
    const { id } = useParams();

    const provinciaEncontrada = Provincia.filter(
        (provincia) => provincia.abreviatura === id
      )[0];
       
      return(
         <table>
            <tr>
                <th>Provincia</th>
                <tr> {provinciaEncontrada.provincia} </tr>
            </tr>
            <tr>
                <th> Abreviatura </th>
                <tr> {provinciaEncontrada.abreviatura} </tr>
            </tr>
            <tr>
                <th> Capital </th>
                <tr> {provinciaEncontrada.capital} </tr>
            </tr>
            <tr>
                <th> Bandera </th>
                <tr>  
                <img className="card-img-top" alt="..."
                 src={require(`../imagenes/${provinciaEncontrada.bandera}`)}                       
                 /> 
                </tr>
            </tr>
            <tr>
                <th> Fecha Autonomía: </th>
                <tr> {provinciaEncontrada.fechaAutonomia} </tr>
            </tr>
            <tr>
                <th> Poblacion: </th>
                <tr> {provinciaEncontrada.poblacion} </tr>
            </tr>
            <tr>
                <th> Superficie: </th>
                <tr> {provinciaEncontrada.superficie} </tr>
            </tr>
            <tr>
                <th> Numero de Departamentos: </th>
                <tr> {provinciaEncontrada.nroDepartamentos} </tr>
            </tr>
            <tr>
                <th> Tiene Puerto: </th>
                <tr> {provinciaEncontrada.tienePuerto} </tr>
            </tr>
            <tr>
                <th></th>
            <button onClick={() => navigate(-1)}>Volver</button>
            </tr>
         </table>
      );
}

export default Detalle;