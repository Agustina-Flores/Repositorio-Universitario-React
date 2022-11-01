 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import GrillaArticulos from './componentes/GrillaArticulos';
import DetalleArticulos from './componentes/DetalleArticulos';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Menu></Menu>
       <Routes>
       <Route exact path="/" element={<GrillaArticulos/>} />
       <Route exact path="/detalle/:codigo" element={<DetalleArticulos/>} />
       <Route  path="/buscar/:clave" element={<GrillaArticulos/>} /> 
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
