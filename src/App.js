import React from "react";
import "./App.css";


export default class App extends React.Component {
  
  state = {
    fullName:"John Doe",
    bio:"I love coding !",
    src: "/John-Doe.jpg",
    profession:"junior web developer",
    shown: false,
    
  };
  handleClick=()=>this.setState({shown:!(this.state.shown)});
  
  render() {
    return(
      <React.Fragment>
        <div className={this.state.shown? "appear":"dissapear"}>
          <h1 style={{fontStyle:'italic'}}>Hello my name is {this.state.fullName}</h1>
          <h2>here's my story {this.state.bio} </h2>
          <React.Fragment>
            <img style={{borderRadius: '8px'}} src={this.state.src} alt=''/>
          </React.Fragment>
          <h2>I am a {this.state.profession} </h2>
        </div>
        <div className="appear">
          <button  onClick={this.handleClick}> Show/Hide </button>
        </div>
      </React.Fragment>
    )
  }
 }