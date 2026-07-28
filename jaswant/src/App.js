import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {addtodo} from "./store/actions"
import { Todos } from './store/components/Todos';

function App() {
  const counter=useSelector((state)=>state.counter)

  return (
    <div className="App">
   {/* <h1>count:{counter}</h1>
   <button onClick={()=>{
     dispatch(addtodo(1))

   }}>add1</button> */}
   <Todos />
    </div>
  );
}

export default App;
