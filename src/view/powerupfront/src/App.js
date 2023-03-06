import { Login } from "./Templates/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
        
          <Routes>
          <Route exact path='/' element={<Login/>}></Route>
            
          </Routes>
        
        
    </Router>
  );
}

export default App;
