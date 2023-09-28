import logo from './logo.svg';
import './App.css';
import {Route,Routes,Router} from 'react-router-dom'

import Users from './components/Users';
import Navbar from './components/Navbar';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={< Users/>}/>
      <Route path='/login' element={< Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route/>
      
    </Routes>
    
    
    </div>
  );
}

export default App;
