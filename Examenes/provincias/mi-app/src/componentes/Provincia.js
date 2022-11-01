import React from "react";
class Provincia extends React.Component
{
    render()
    {const linkDetalleProvincia = "/detalle/" + this.props.abreviatura
        return(
            <div>
                 <table border="1" style={{ width: '150px', margin:'10px' }} className="tabla-provincia">
                    <tbody>
                    <tr> <td style={{color:'green'}}> {this.props.provincia} </td> </tr>
                    <img className="card-img-top" alt="..."
                    src={require(`../imagenes/${this.props.imagen}`)}                       
                    />
                     <tr> <td style={{fontWeight:'bold'}}>  Capital - {this.props.capital} </td> </tr>
                     <tr> <td> <a href= {linkDetalleProvincia}className="btn btn-secondary">VER MAS</a> </td> </tr>
                    </tbody>
                 </table>
                    
            </div>
 
        );
    }
}

export default Provincia;