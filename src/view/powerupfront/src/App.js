import { Login } from "./Templates/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SingUp } from "./Templates/SingUp/SingUp";

function App() {
  return (
    <Router>
        
          <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/cadastro' element={<SingUp/>}></Route>

          </Routes>
        
        
    </Router>
  );
}

export default App;
