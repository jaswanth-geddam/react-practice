
import './App.css';
import Counter from './store/components/counter';
import {Todos} from './store/components/todos';



function App() {

  return (
    <div className="App">
      <Counter></Counter>
  <Todos ></Todos>
    </div>
  );
}

export default App;
