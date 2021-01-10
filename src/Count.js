import React, { Component } from "react";
import Clock from "./Clock";
import pageLogo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "January, 24, 2021" };
  }
  render() {
    return (
      <div className="App">
          
         <img src={pageLogo}/> 
        <div className="App-title"></div>
        <div className="App-date">Här öppnar <span>Poolbutikens webbshop</span> 24 januari 2021.</div>
     
        <Clock deadline={this.state.deadline} />
        
      </div>
    );
  }
}
export default App;