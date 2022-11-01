import {BrowserRouter ,Route, Routes} from "react-router-dom";
import './App.css';
import Menu from './componentes/Menu';
import Home from './componentes/Home';
import Contacto from './componentes/Contacto';
import NuestrosAutos from './componentes/NuestrosAutos';
import DetalleAuto from "./componentes/DetalleAuto";
 

function App() {
  return (
    <div className="App">
     <div className="contenedor-principal">
      <BrowserRouter>
      <Menu></Menu>
      <Routes>    
        <Route exact path="/" element={<Home/>} />     
        <Route exact path="/nuestrosAutos" element={<NuestrosAutos/>} />  
        <Route exact path="/buscar/:id" element={<NuestrosAutos/>} /> 
        <Route exact path="/contacto" element={<Contacto/>} />      
        <Route path="/detalle/:id" element={<DetalleAuto/>} />     
      </Routes>
      </BrowserRouter>       
      </div>
    </div>
  );
}

export default App;
