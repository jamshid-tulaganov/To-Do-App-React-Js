  import React, { Component } from 'react'
import './App.css';
import Header from "./components/header/header"
import AddTask from "./components/addTask/addTask";
export class App extends Component {

    //constructor
    constructor(){
      super();
      this.state = {
        tasks:[]
      }
    }


  render() {
    return (
      <div className="App">
          <Header />
          <AddTask />
      </div>
    )
  }
}


export default App
