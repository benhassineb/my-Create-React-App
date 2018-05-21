import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="alert alert-primary" role="alert" >
          A simple primary alert—check it out!
          </div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
        </nav>

        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
      </div>
    );
  }
}

export default App;
