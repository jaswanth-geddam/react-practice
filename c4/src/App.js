import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import{DashBoard} from "./components/dashBord"
import {Route,Routes} from "react-router-dom"
import {AdminLogin} from "./components/adminlogin"
import {AdminDashBoard} from "./components/admindashboard"


function App() {
  return (
    <div className="App">

     <Routes>
       <Route exact path="/dashboard" element={<DashBoard />}> </Route>
       <Route exact path="/login" element={<Login/>}></Route>
       <Route exact path="/admindashboard" element={<AdminDashBoard />}> </Route>
       <Route  exact path="/adminlogin" element={<AdminLogin/>}></Route>
     </Routes>
    
      
    
     
    </div>
  );
}

export default App;
