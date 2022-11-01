import React from "react";
import '../hojas-de-estilos/Menu.css';


let clave = "";
let palabra = "";
clave = (e) => {
  palabra = e.target.value;
};

let submitHandler = (e) => {
  if (palabra === "") {
    window.location.href = "/";
  } else {
    window.location.href = `/buscar/${palabra}`;
  }
};
function Menu  ()
{
 
        return(
            <div class="topnav">
            <a href="/">HOME</a>
            <a href="/heroesDC">Heroes DC</a>
            <a href="/heroesMarvel">Heroes Marvel</a>
            <form className="form-inline">
            <input 
             className="form-control mr-sm-2"
            type="search" 
            placeholder="Buscar.." 
            aria-label="Search"
            name="clave" 
            onChange={clave}
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