import logo from './logo.svg';
import './App.css';
import { Home } from './component/home';
import {AllProducts} from './component/products';
import{Productdetails} from './component/productdetails';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
<div>
<Routes>
      <Route path="/home" element={ <Home />} ></Route>
      <Route path="/products" element={ <AllProducts/>} ></Route>
      <Route path="/products/:name/:price/:id" element={<Productdetails/> } ></Route>
      <Route path="*" element={<h1 fontSize="100px">404 error</h1> } ></Route>
    </Routes>
   
</div>
  
  );
}

export default App;
