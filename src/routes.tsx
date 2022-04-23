import { Route, Routes } from 'react-router-dom';

import  { Home }  from './pages/Home';
import { Menu } from './pages/Menu';
import { Recompensas } from './pages/Recompensas';

const Rotas = (): JSX.Element => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/recompensas" element={<Recompensas />} />
    </Routes>
  )
}

export default Rotas;