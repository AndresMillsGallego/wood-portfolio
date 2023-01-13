import React from 'react'
import { Routes, Route } from "react-router-dom";

import Body from './components/Body/Body'
import Floors from './components/Floors/Floors';
import Stairs from './components/Stairs/Stairs';
import Furniture from './components/Furniture/Furniture';


const App = () => {


  return (
   <div id='app'>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/floors' element={<Floors />}/>
      <Route path='/stairs' element={<Stairs />}/>
      <Route path='/furniture' element={<Furniture />}/>
    </Routes>
   </div>
  )
}

export default App
