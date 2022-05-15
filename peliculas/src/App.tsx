import './css/App.css';
import Menu from './Utils/Menu';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import rutas from './route-config';
import configurarValidaciones from './validaciones';

configurarValidaciones()


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <h3>Func</h3>
        <div className="container">
          <Routes>
            {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} ></Route>)}

          </Routes>


          <Routes />
        </div>

      </BrowserRouter>


    </div >
  );
}

export default App;
