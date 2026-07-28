import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import {Home} from "./components/home"
import{Songes} from "./components/songes"

function App() {
  return (
    
    <div className="App">
   
   
  
  <Routes>
    <Route exact path="/home" element={ <Home />} ></Route>
    <Route exact path="/songes" element={ <Songes />} ></Route>
     
    </Routes>
    
    

  
    </div>
  );
}

export default App;
