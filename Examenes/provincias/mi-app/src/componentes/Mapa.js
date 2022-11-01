import React from "react";
import mapa from '../imagenes/argentina.png';
class Mapa extends React.Component
{

    render()
    {

        return(
            <div>
                 <img 
                 alt="..."
                 src={mapa}
                 ></img>
            </div>
        );
    }
}
export default Mapa;