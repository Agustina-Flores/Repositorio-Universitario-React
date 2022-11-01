import React from "react";
import { useParams } from "react-router-dom";
import Articulos from '../data/articulos.json'

const DetalleArticulos = () =>{


const { codigo } = useParams();

const articuloEncontrado = Articulos.find((articulo => articulo.codigo == codigo))

const promocion = articuloEncontrado.esPromocion ? "SI" : "NO"

const listaPrecios = articuloEncontrado.preciosRelevados.map((precio) =>{

return<li>{precio}</li>
});

//promedio de los precios

let suma =0;
articuloEncontrado.preciosRelevados.forEach((precio) =>{

    suma += parseInt(precio);
})

let promedio = suma / articuloEncontrado.preciosRelevados.length


//mostrar nombre si es promocion o no

const nombre = articuloEncontrado.esPromocion ? 

(
    <h1 style={{color:'green'}}> {articuloEncontrado.articulo}</h1>
    ) : 
    (
        <h1 style={{color:'red'}}> {articuloEncontrado.articulo}</h1>
 );
 
    return(
        <div className="container">
            <>
            <div className="row">
                <table bordered style={{ width: '25rem' }}>
                    <tr>
                        <td>
                        <img className="contenedor-imagen" alt="..."
                            src={require(`../imagenes/${articuloEncontrado.foto.toLowerCase()}`)}
                            /><br></br>
                        </td>
                        <td>
                            {nombre}
                        </td>
                    </tr>
                    <tr>
                        <td>Codigo: </td>
                        <td>{articuloEncontrado.codigo}</td>
                    </tr>
                    <tr>
                        <td>Rubro: </td>
                        <td>{articuloEncontrado.rubro}</td>
                    </tr>
                    <tr>
                        <td>Es Promocion: </td>
                        <td>{promocion}</td>
                    </tr>
                    <tr>
                        <td>Fecha Vencimiento: </td>
                        <td>{articuloEncontrado.fechaVencimiento}</td>
                    </tr>
                    <tr>
                        <td>Precios Revelados: </td>
                        <td><ul>{listaPrecios}</ul></td>
                    </tr>
                    <tr>
                        <td>Promedio: </td>
                        <td>{promedio}</td>
                    </tr>
                </table>
            </div>
            </>
        </div>
    );
}

export default DetalleArticulos;