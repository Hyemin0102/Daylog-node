import React from 'react';
//import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';

//const apiUrl = 'http://localhost:4000/api';

function App() {
/* const [text, setText] = useState('');

  const sendRequest = async() => {
    const response = await axios.get('/api')
    setText(response.data);
  }

  useEffect(() => {
    sendRequest();
  }, []);
 */
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/list' element={<ListPage/>}/>
    </Routes>
  );
}

export default App;
