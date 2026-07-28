import logo from './logo.svg';
import {Component} from "react"
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      string:"hello suppy"
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
          onClick={()=>this.setState({string:"suppy-1"})}>click me</button>
          <p>jaswanth</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
} 
export default App;
