import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import { Add } from './Component/Add';

function App() {

  


  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='add' element={<Add/>} />

    </Routes>
    
    
    </BrowserRouter>
    
    
  );
}

export default App;
