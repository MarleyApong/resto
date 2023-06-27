import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Menu from './pages/Menu';
import Inscription from './pages/Inscription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Accueil/>}/>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/about' element={<APropos/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/inscription' element={<Inscription/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
