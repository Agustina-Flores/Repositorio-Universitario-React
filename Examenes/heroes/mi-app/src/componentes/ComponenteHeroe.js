import React from "react";


class ComponenteHeroe extends React.Component
{
 
    render()
    {
        const listaPoderes = this.props.poderes.map((poder, i) => {
            return <li>{poder}</li>;
          });
          const detalle = "/detalle/" + this.props.id;
        return(
                <div> 
                            <table bordered style={{ width: '25rem' }}>
                                <thead>
                                    <th style={{color:'green'}}>
                                    <h3>{this.props.nombre}</h3>                                 
                                    </th>
                                    <th style={{color:'red'}}>
                                    <h3>Poderes</h3>
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>                   
                                        <img className="card-img-top"  alt="..."
                                        src={require(`../imagenes/${this.props.img.toLowerCase()}`)}
                                        /><br></br>
                                       
                                    </td>
                                    <td>
                                        <ul>
                                            {listaPoderes}
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                <td>
                                    <a href={detalle} className="btn btn-secondary">VER MAS</a>
                                </td>
                                <td></td>
                                </tr>
                                </tbody>
                               
                            <td>
                                <tr> 
                                
                               </tr>
                            </td>
                            </table>
                        </div>
                
                )
            } 
    }
 
export default ComponenteHeroe;