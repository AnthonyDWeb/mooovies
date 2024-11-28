// Library
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Style CSS
import './App.css';

// Views
import Homepage from './views/Homepage';
import Weekly from './views/Weekly';
import Rated from './views/rated';
import Detail from './views/Movie';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/rated" element={<Rated />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;