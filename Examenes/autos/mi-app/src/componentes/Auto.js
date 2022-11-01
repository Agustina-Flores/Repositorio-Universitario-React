import React from "react";

 
class Auto extends React.Component
{
    render()
    {
     
      const autoId = this.props.imagen.replace(".jpg", "");
      const precio = (this.props.precio === '0') ? "Consultar" : "$ " + new Intl.NumberFormat().format(this.props.precio)
     
        return(
            <div className="card" style={{ width: "150px", margin: "2px" }}>
          <a href={`/detalle/${autoId}`}>
            <img className="card-img-top" alt="..."
             src={require(`../imagenes/${this.props.imagen}`)}                       
            />
          </a>                  
          <div className="card-body">
            <p className="card-text">
              <strong>{this.props.marca}</strong>
            </p>
            <p className="card-text">
              {this.props.modelo} - {this.props.anio}
            </p>
            <p className="card-text" style={{ color: "orange" }}>
              
              {precio}
            </p>
          </div>
          </div>
        );
    }
}

export default Auto;