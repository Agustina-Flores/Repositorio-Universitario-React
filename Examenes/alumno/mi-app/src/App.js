 
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import GrillaAlumnos from './componentes/GrillaAlumnos';
import Detalle from './componentes/Detalle';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Menu></Menu>
     <Routes>
     <Route exact path="/" element={<GrillaAlumnos/>} /> 
     <Route exact path="/detalle/:legajo" element={<Detalle/>} /> 
     <Route  path="/buscar/:clave" element={<GrillaAlumnos/>} /> 
    
     </Routes> 
     </BrowserRouter>
    </div>
  );
}

export default App;
