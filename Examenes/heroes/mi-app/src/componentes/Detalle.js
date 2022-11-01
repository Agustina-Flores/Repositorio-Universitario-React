import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heroes from "../data/heroes.json";

const Detalle = () =>
{
    const navigate = useNavigate();
    const { id } = useParams();

    const heroeEncontrado = Heroes.find((heroe) => heroe.id === id)
    const listaPoderes = heroeEncontrado.poderes.map((poder, i) => {
        return <li>{poder}</li>;
      });
      
    return(
        <>
        <div className="heroes">
         <table bordered style={{ width: '25rem' }}  >
            <td md={4} style={{ borderRight: "1px solid #cecece" }}> 
            <tr>
               <img className="contenedor-imagen" alt="..."
              src={require(`../imagenes/${heroeEncontrado.img.toLowerCase()}`)}
             /><br></br>
             </tr>
             <tr>
             <p>
                Biografia: <br/>
                {heroeEncontrado.bio}
                </p>
            </tr>
            </td>
            
            <td>
              <div className="">
                <h1>{heroeEncontrado.nombre}</h1>
                <h2>{heroeEncontrado.casa}</h2>
                <h4>Aparición: {heroeEncontrado.aparicion}</h4>
                <ul>
                    {listaPoderes}
                </ul>
                
                <button onClick={() => navigate(-1)}>Volver</button>
              </div>
            </td>
         </table>
        </div>
        </>
    )
}

export default Detalle;