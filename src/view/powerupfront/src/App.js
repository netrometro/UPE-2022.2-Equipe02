import { Login } from "./Templates/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SingUp } from "./Templates/SingUp/SingUp";
import { Home } from "./Templates/Home/Home";
import { Perfil } from "./Templates/Perfil/Perfil";

function App() {
  return (
    <Router>
        
          <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/cadastro' element={<SingUp/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/perfil' element={<Perfil/>}></Route>
          </Routes>
        
        
    </Router>
  );
}

export default App;
