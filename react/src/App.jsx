import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '../src/components/Login';
import Kk from './components/Kk';
import Signup from './components/Signup';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return(
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/Signup" element={<Signup />} />
  <Route path="/kk" element={<Kk />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App
