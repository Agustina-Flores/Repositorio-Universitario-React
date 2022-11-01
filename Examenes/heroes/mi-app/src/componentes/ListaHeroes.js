import React  from "react";
import { useParams } from "react-router-dom";
import Heroes from '../data/heroes.json';
import ComponenteHeroe from "./ComponenteHeroe";
 

const ListaHeroes = () =>
{
    /*
    constructor() {
        super();
        this.state = {
            Heroes,
        };
      }
*/
   
   // render()
    //{ 
        const url = window.location.href;
       
         const { clave } = useParams();

        const heroes =  Heroes.map((heroe , i)=>{
            if(url.includes("heroesDC"))
            {
                if(heroe.casa === "DC")
                {
                    return(
                        <ComponenteHeroe
                        key={heroe.id}
                        nombre={heroe.nombre}
                        id={heroe.id}
                        poderes={heroe.poderes}
                        img={heroe.img}
                        />
                    );
                } else {
                    return null;
                }
            } else if (url.includes("heroesMarvel"))
            {
                if(heroe.casa === "Marvel")
                {
                    return(
                        <ComponenteHeroe
                        key={heroe.id}
                        nombre={heroe.nombre}
                        id={heroe.id}
                        poderes={heroe.poderes}
                        img={heroe.img}
                        />
                    );
                } else {
                    return null;
                }
            } 
            else if (url.includes("/buscar/")) {
                let poder="";
                let poderParametro ="";
                for( poder of heroe.poderes){
                    if (poder.includes(clave)) {
                        poderParametro =poder;
                        
                      }
                    } 
               
                if ((heroe.nombre === clave)|| (poderParametro) || (heroe.bio === clave)) {
                  return (
                    <ComponenteHeroe
                     key={heroe.id}
                     nombre={heroe.nombre}
                     idHeroe={heroe.id}
                    poderes={heroe.poderes}
                     img={heroe.img}
                 />
                  );
                } 
                else {
                  return null;
                }
              } 
                else
                {
                    //lista todos
                    return(
                        <ComponenteHeroe
                        key={heroe.id}
                        nombre={heroe.nombre}
                        id={heroe.id}
                        poderes={heroe.poderes}
                        img={heroe.img}
                        />
                    );
                 }
                
            }) ;
      
            return (
            <div>
                {heroes}
                
            </div>
           );
    //}
 
    /*
  const  checkInclude = (busqueda, heroe) =>
  {

        const busq = busqueda.toLowerCase()
        const nombre = heroe.nombre.toLowerCase()
        const bio = heroe.bio.toLowerCase()
        const poderes = heroe.poderes
        if(nombre.includes(busq)){
          return true
        }
        if(bio.includes(busq)){
          return true
        }
        for(let poder of poderes){
          if (poder.toLowerCase().includes(busq)) {
            return true
          }
        }
        return false
      }//checkInclude()
  */
}
export default ListaHeroes;

 