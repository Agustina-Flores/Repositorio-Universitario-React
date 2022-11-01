 import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './componentes/Navigation';
import Home from './componentes/Home';
import DondeEstamos from './componentes/DondeEstamos';
import ListaProductos from './componentes/ListaProductos';
import DetalleProducto from './componentes/DetalleProducto';

function App() {
  return (
    <div className="App">
     <div className='contenedor-principal'>
    
     <Router>
     <Navigation />
     <Routes>
     <Route exact path="/" element={<Home/>} />  
     <Route exact path="/home" element={<Home/>} />  
     <Route exact path="/dondeEstamos" element={<DondeEstamos/>} /> 
     <Route exact path="/productos" element={<ListaProductos/>} />      
     <Route path="/productos/:id" element={<DetalleProducto exact={true} />} />  
     </Routes>
     </Router>  
     </div>
    </div>
  );
}

export default App;
