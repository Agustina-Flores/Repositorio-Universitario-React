 
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from '../src/componentes/Menu';
import Home from '../src/componentes/Home';
import Detalle from '../src/componentes/Detalle';
import Mapa from '../src/componentes/Mapa';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="/provincia-puerto" element={<Home/>} ></Route>
          <Route path="/detalle/:id" element={<Detalle/>} ></Route>
          <Route exact path="/mapa" element={<Mapa/>} ></Route>
          <Route exact path="/buscar/:superficie" element={<Home/>} ></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
