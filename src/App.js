import React from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
//import Navigation from './components/Navigation';

function App() {
/**  constructor(){
    super();
    this.state = {
      todos
    } 
  }
  **/
  return (

    <div className="App">
  
   
      <nav className="navbar navbar-dark bg-dark">
           <a href="" className="text-white"> hola

           </a>
          </nav>
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="display-1"> welcome </h1>

    </div>
  );
}

export default App;
