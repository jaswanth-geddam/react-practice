import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home"
import {About} from "./components/about"
import {Route,Routes} from "react-router-dom" 
import {Navbar} from "./components/nav"
import {Product} from "./components/products"
import {Users} from "./components/Users"
import {Userdetails} from "./components/usersdetails"

function App() {
  return (
  <div>
     <Navbar />
    <Routes>
      <Route path="/home" element={ <Home />} ></Route>
      <Route path="/about" element={ <About />} ></Route>
      <Route path="/products/:id" element={<Product />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:id" element={<Userdetails />}></Route>
    </Routes>
     
  </div>
   
  );
}

export default App;
