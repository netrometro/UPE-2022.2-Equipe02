import { Login } from "./Templates/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SingUp } from "./Templates/SingUp/SingUp";
import { Home } from "./Templates/Home/Home";
import { Perfil } from "./Templates/Perfil/Perfil";
import { Diet } from "./Templates/Diet/Diet";
import { GetDiet } from "./Organism/getDiet/getDiet";

function App() {
  return (
    <Router>
        
          <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/cadastro' element={<SingUp/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/perfil' element={<Perfil/>}></Route>
          <Route exact path='/diet' element={<Diet/>}></Route>
          <Route exact path='/getDiet' element={<GetDiet/>}></Route>
          </Routes>
        
        
    </Router>
  );
}

export default App;
