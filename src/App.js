import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
