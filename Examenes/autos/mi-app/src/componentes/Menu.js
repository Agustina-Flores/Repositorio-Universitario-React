import React from "react";
import '../hojas-de-estilo/Menu.css';

let id = ""
let palabra="";


id = (e) =>{
    palabra = e.target.value;
}
let submitHandler = (e) => {
    if (palabra === "") {
      window.location.href = "/";
    } else {
      window.location.href = `/buscar/${palabra}`;
    }
  };

function Menu ()
{ 
        return(
            <div class="topnav">
            <a href="/">HOME</a>
            <a href="/nuestrosAutos">Nuestros Autos</a>
            <a href="/contacto">Contacto</a>
            <form className="form-inline">
            <input 
             className="form-control mr-sm-2"
            type="search" 
            placeholder="Buscar.." 
            aria-label="Search"
            name="clave" 
             onChange={id}
            />
            <button 
             className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={submitHandler}
            >Buscar
            </button>
        </form>
    </div>
        );
     
}
export default Menu;