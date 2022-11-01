import React from "react";
import Autos from '../data/autos.json';
import { useParams, useNavigate } from "react-router-dom";

const DetalleAuto = () =>{
    const navigate = useNavigate();
    const { id } = useParams();
    const autoEncontrado  = Autos.filter((auto) => auto.imagen.replace(".jpg", "") === id)[0];
 
    return(
        <> 
        <div className="contenedor-detalle">
       <tr>
            <td md={4} style={{ borderRight: "1px solid #cecece" }}>
                <tr> 
                <img className="card-img-top"  alt="..."
                src={require(`../imagenes/${autoEncontrado.imagen.toLowerCase()}`)}
                /><br></br>
                </tr>
                <tr>
                <p className="">
                  Localidad: <br />
                 {autoEncontrado.localidad}
                </p>
                </tr>
            </td>
            <td>
            <div className="">
                <h1>{autoEncontrado.marca}</h1>
                <h2>{autoEncontrado.modelo}</h2>
                <h4>Año: {autoEncontrado.anio}</h4>
                <p>{autoEncontrado.precio}</p>
                <button onClick={() => navigate(-1)}>Volver</button>
              </div>
            </td>
       </tr>
        </div>
        </>
    );
}

export default DetalleAuto;