import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Main from './components/Main';
import CreateElement from './components/CRUD/create__element';
import CreateCategory from './components/CRUD/create__category';

function App() {
  return (
    <div>
        <Main>
            <Routes>
              <Route exact path='/' element={< Menu />} />
              <Route path='/home' element={< Home />} />
              <Route path='/reservation' element={< Reservation />} />
              <Route path='/gallery' element={< Gallery />} />
              <Route path='/contact' element={< Contact />} />
              <Route path='/auth' element={< Auth />} />
              <Route path='/create-element' element={< CreateElement />} />
              <Route path='/create-category' element={< CreateCategory />} />
            </Routes>
        </Main>
    </div>
  );
}

export default App;
