import React from 'react';
import Navbar from './components/Navbar';

import './App.css';
import Home from '../src/components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from '../src/components/pages/Services';
import Products from '../src/components/pages/Products';
import SignUp from '../src/components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />

          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
