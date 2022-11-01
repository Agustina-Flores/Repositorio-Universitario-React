import React from "react";
import '../hojas-de-estilo/Contacto.css';
class Contacto extends React.Component
{
    render()
    {
        return(
            <div>
           
            <div className="container">
              <h3 style={{ color: "gray" }}>
                ¿Necesitas ayuda o tenes alguna consulta?
              </h3>
              <br></br><br></br>
              <p>
                Es importante que sepas que sólo somos un sitio web de clasificados.
                No nos hagas consultas respecto a información de los vehículos que
                se publican en el portal. Éstas son responsabilidad exclusiva de sus
                anunciantes, y debes contactarlos desde la ficha de cada vehículo.
              </p>
              <p>
                ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o
                sugerencias a <a href="mailto:consultas@atodomotor.com.ar">
                  consultas@atodomotor.com.ar
                </a>, te responderemos a la brevedad.
              </p>
            </div>
          </div>
        );
    }
}

export default Contacto;