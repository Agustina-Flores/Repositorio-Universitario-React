import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './componentes/Menu'; 
import Detalle from "./componentes/Detalle";
import ListaHeroes from "./componentes/ListaHeroes";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
       <Router>
        <Menu />
        <Routes>
        <Route exact path="/" element={<ListaHeroes/>} />  
        <Route exact path="/heroesDC" element={<ListaHeroes/>} /> 
        <Route exact path="/heroesMarvel" element={<ListaHeroes/>} /> 
        <Route path="/detalle/:id" element={<Detalle/>} /> 
        <Route path="/buscar/:clave" element={<ListaHeroes/>} />
        </Routes>
       </Router>
      </div>
    </div>
  );
}

export default App;
