import React from 'react';
//import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/list' element={<ListPage/>}/>
      <Route path='/write' element={<WritePage/>}/>
    </Routes>
  );
}

export default App;
