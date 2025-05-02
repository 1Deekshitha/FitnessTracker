import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Yoga from './pages/Yoga/Yoga';
import Tutorials from './pages/Tutorials/Tutorials';
import Login from './Login';
import Register from './Register';

import './App.css';
import MainHome from './MainHome';
import YogaGraph from './pages/Yoga/YogaGraph';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} /> {/* Default route now renders Login */}
        <Route path='/MainHome' element={<MainHome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/start' element={<Yoga />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/graph' element={<YogaGraph/>}/>
      </Routes>
    </Router>
  );
}
