import React from 'react';
 

class Alumno extends React.Component
 
{
render()
{
  /*
   let notaFinal=0;
  const promedio = this.props.notas.map((nota,i) =>{
    notaFinal += nota + notaFinal / i;
    i++;
    return <tr>{notaFinal}</tr>
  });
  */

  

  const detalle = "/detalle/" + this.props.legajo;
    return(
        <div>
          <table bordered style={{ width: '50rem' }}>
            <thead>
             <th>Alumno</th>
             <th>Legajo</th>
             <th>Fecha Nacionamiento</th>
             <th>Promedio Notas</th>
             <th></th>
            </thead>
            <tbody>
            <td bordered style={{ width: '10rem' }}>{this.props.alumno}</td>
            <td bordered style={{ width: '2rem' }}>{this.props.legajo}</td>
            <td bordered style={{ width: '9rem' }}>{this.props.fechaNacimiento}</td>
            <td bordered style={{ width: '9rem' }}>{this.props.promedio}</td>
            <td></td>
            <td><a href={detalle}>VER DETALLE</a></td>
            </tbody>
            
          </table>
        </div>
    );
}
}

export default Alumno;