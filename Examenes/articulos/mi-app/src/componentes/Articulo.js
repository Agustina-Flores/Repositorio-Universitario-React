import React from "react";


class Articulo extends React.Component
{


    render()
    {

        const detalle = "/detalle/" + this.props.codigo;
        
        
        return(
            <div>
                <table bordered style={{ width: '50rem' }}>
                    <thead>
                    <th>Articulo</th>
                    <th>Codigo</th>
                    <th>Fecha Vencimiento</th>
                    <th>Promedio Precio</th>
                    <th></th>
                    </thead>
                    <tbody>
                    <td bordered style={{ width: '10rem' }}>{this.props.articulo}</td>
                    <td bordered style={{ width: '10rem' }}>{this.props.codigo}</td>
                    <td bordered style={{ width: '10rem' }}>{this.props.fechaVencimiento}</td>
                    <td bordered style={{ width: '9rem' }}>{this.props.promedio}</td>
                    <td><a href={detalle}>VER DETALLE</a></td>
                    <td></td>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Articulo;