import React from "react";
import '../hojas-de-estilo/Navegation.css';

class Navegation extends React.Component
{
    render()
    {

        return(
            <div class="topnav">
            <a href="home">Home</a>
            <a href="dondeEstamos">Donde Estamos</a>
            <a href="productos">Productos</a>
          </div>
        );
    }
}

export default Navegation;